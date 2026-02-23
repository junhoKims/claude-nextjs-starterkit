import { ChevronRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-20 md:py-32 space-y-8">
      {/* 버전 뱃지 */}
      <div className="flex justify-center">
        <Badge variant="secondary" className="gap-2">
          <Zap className="h-4 w-4" />
          <span>Latest Release</span>
        </Badge>
      </div>

      {/* 제목 */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          현대적인 Next.js 스타터킷
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Next.js 15, React 19, TailwindCSS v4, shadcn/ui로 구성된 프로덕션 레디 스타터킷으로 빠르게 시작하세요.
        </p>
      </div>

      {/* CTA 버튼 */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Button size="lg" className="gap-2">
          시작하기
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          문서 보기
        </Button>
      </div>
    </section>
  );
}
