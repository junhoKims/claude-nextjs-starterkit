import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/sections/site-header";
import { siteConfig } from "@/lib/config";

describe("SiteHeader", () => {
  it("사이트 이름이 렌더링되어야 한다", () => {
    render(<SiteHeader />);
    expect(screen.getByText(siteConfig.name)).toBeInTheDocument();
  });

  it("GitHub 링크가 올바른 href를 가져야 한다", () => {
    render(<SiteHeader />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", siteConfig.githubUrl);
  });

  it("GitHub 링크가 새 탭에서 열려야 한다", () => {
    render(<SiteHeader />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("헤더가 sticky 포지션을 가져야 한다", () => {
    render(<SiteHeader />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("sticky");
  });
});
