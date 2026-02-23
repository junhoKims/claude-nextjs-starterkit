import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function TechStackSection() {
  const technologies = [
    { name: "Next.js", version: "15" },
    { name: "React", version: "19" },
    { name: "TypeScript", version: "5.9" },
    { name: "TailwindCSS", version: "4" },
    { name: "shadcn/ui", version: "latest" },
    { name: "Lucide Icons", version: "latest" },
    { name: "pnpm", version: "latest" },
  ];

  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-16">
      <Separator className="mb-12" />

      <div className="space-y-8">
        {/* 제목 */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">기술 스택</h2>
          <p className="text-muted-foreground mt-2">
            최신 기술을 기반으로 구성되었습니다.
          </p>
        </div>

        {/* 뱃지 그리드 */}
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <Badge key={tech.name} variant="outline" className="text-sm">
              {tech.name}
              {tech.version !== "latest" && (
                <span className="ml-1 opacity-70">v{tech.version}</span>
              )}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
