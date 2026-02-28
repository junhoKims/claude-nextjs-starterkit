#!/bin/bash
# Claude Code PostToolUse hook - Edit/Write 후 자동 포맷팅 (Prettier → ESLint)
# 항상 exit 0 — 포맷 실패가 Claude 작업을 블록하면 안 됨

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

if [ -z "$FILE_PATH" ]; then
    echo "DEBUG: post-tool-use-format: file_path 없음, 스킵" >&2
    exit 0
fi

if [ -z "$CLAUDE_PROJECT_DIR" ]; then
    echo "DEBUG: post-tool-use-format: CLAUDE_PROJECT_DIR 미설정, 스킵" >&2
    exit 0
fi

# node_modules / .next 제외
if [[ "$FILE_PATH" == *"/node_modules/"* ]] || [[ "$FILE_PATH" == *"/.next/"* ]]; then
    echo "DEBUG: post-tool-use-format: 빌드/의존성 파일 스킵: $FILE_PATH" >&2
    exit 0
fi

# .js .jsx .ts .tsx만 처리
EXTENSION="${FILE_PATH##*.}"
case "$EXTENSION" in
    js|jsx|ts|tsx) ;;
    *)
        echo "DEBUG: post-tool-use-format: 대상 아닌 확장자 스킵: $EXTENSION" >&2
        exit 0
        ;;
esac

if [ ! -f "$FILE_PATH" ]; then
    echo "DEBUG: post-tool-use-format: 파일 없음: $FILE_PATH" >&2
    exit 0
fi

PROJECT_BIN="${CLAUDE_PROJECT_DIR}/node_modules/.bin"
PRETTIER_BIN="${PROJECT_BIN}/prettier"
ESLINT_BIN="${PROJECT_BIN}/eslint"

echo "DEBUG: post-tool-use-format: 포맷 시작 → $FILE_PATH" >&2

# Prettier
if [ -x "$PRETTIER_BIN" ]; then
    "$PRETTIER_BIN" --write --log-level=warn "$FILE_PATH" 2>&1 | while IFS= read -r line; do
        echo "DEBUG: prettier: $line" >&2
    done
    [ "${PIPESTATUS[0]}" -ne 0 ] && echo "DEBUG: prettier 비정상 종료 (non-blocking)" >&2
else
    echo "DEBUG: prettier 바이너리 없음: $PRETTIER_BIN" >&2
fi

# ESLint --fix
if [ -x "$ESLINT_BIN" ]; then
    "$ESLINT_BIN" --fix "$FILE_PATH" 2>&1 | while IFS= read -r line; do
        echo "DEBUG: eslint: $line" >&2
    done
    [ "${PIPESTATUS[0]}" -ne 0 ] && echo "DEBUG: eslint 비정상 종료 (non-blocking)" >&2
else
    echo "DEBUG: eslint 바이너리 없음: $ESLINT_BIN" >&2
fi

echo "DEBUG: post-tool-use-format: 완료 → $FILE_PATH" >&2
exit 0
