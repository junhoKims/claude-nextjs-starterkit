import {
  Layers,
  Paintbrush,
  Shield,
  Rocket,
  Moon,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      title: "App Router",
      description: "최신 Next.js App Router를 활용한 현대적인 라우팅 구조",
      icon: Layers,
    },
    {
      title: "shadcn/ui",
      description: "아름답고 접근성 높은 UI 컴포넌트 라이브러리",
      icon: Paintbrush,
    },
    {
      title: "TypeScript",
      description: "타입 안전성을 제공하는 완전한 TypeScript 지원",
      icon: Shield,
    },
    {
      title: "성능 최적화",
      description: "Next.js의 자동 코드 스플리팅과 이미지 최적화",
      icon: Rocket,
    },
    {
      title: "다크모드",
      description: "시스템 설정을 따르는 내장 다크모드 지원",
      icon: Moon,
    },
    {
      title: "개발자 경험",
      description: "빠른 개발 서버와 우수한 에러 메시지",
      icon: Zap,
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-16">
      <div className="space-y-12">
        {/* 제목 */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">주요 기능</h2>
          <p className="text-muted-foreground mt-2">
            생산성 높은 개발을 위한 다양한 기능들을 제공합니다.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
