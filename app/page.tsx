import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { GettingStartedSection } from "@/components/sections/getting-started-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechStackSection />
        <FeaturesSection />
        <GettingStartedSection />
      </main>
      <SiteFooter />
    </div>
  );
}
