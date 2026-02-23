import { describe, it, expect } from "vitest";
import { siteConfig } from "@/lib/config";

describe("siteConfig", () => {
  it("name 필드가 문자열이어야 한다", () => {
    expect(typeof siteConfig.name).toBe("string");
    expect(siteConfig.name.length).toBeGreaterThan(0);
  });

  it("description 필드가 문자열이어야 한다", () => {
    expect(typeof siteConfig.description).toBe("string");
    expect(siteConfig.description.length).toBeGreaterThan(0);
  });

  it("githubUrl이 유효한 URL 형식이어야 한다", () => {
    expect(siteConfig.githubUrl).toMatch(/^https?:\/\//);
  });

  it("url이 유효한 URL 형식이어야 한다", () => {
    expect(siteConfig.url).toMatch(/^https?:\/\//);
  });
});
