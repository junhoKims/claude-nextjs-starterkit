import { Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export function GettingStartedSection() {
  const steps = [
    {
      title: "저장소 복제",
      command: `git clone ${siteConfig.githubUrl}.git`,
    },
    {
      title: "의존성 설치",
      command: "pnpm install",
    },
    {
      title: "개발 서버 실행",
      command: "pnpm dev",
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-16">
      <div className="space-y-8">
        {/* 제목 */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold">시작하기</h3>
          <p className="text-muted-foreground mt-2">
            몇 가지 간단한 명령어로 바로 시작할 수 있습니다.
          </p>
        </div>

        {/* 설치 단계 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-3 rounded-lg flex items-start gap-2">
                  <Terminal className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                  <code className="text-sm break-all font-mono text-foreground">
                    {step.command}
                  </code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 안내 문구 */}
        <div className="bg-muted p-6 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            더 자세한 내용은{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              문서
            </a>
            를 참고하세요.
          </p>
        </div>
      </div>
    </section>
  );
}
