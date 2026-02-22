import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">Next.js Starterkit</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
