import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <Separator className="mb-8" />
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 브랜드 */}
          <div>
            <h4 className="font-bold text-lg mb-2">{siteConfig.name}</h4>
            <p className="text-sm text-muted-foreground">
              현대적인 웹 개발을 위한 완벽한 시작점
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="font-semibold mb-4">링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  문서
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  예제
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  커뮤니티
                </a>
              </li>
            </ul>
          </div>

          {/* 소셜 */}
          <div>
            <h4 className="font-semibold mb-4">팔로우</h4>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10"
              >
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* 저작권 */}
        <div className="pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
