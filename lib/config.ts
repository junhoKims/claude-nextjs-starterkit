export const siteConfig = {
  name: "Next.js Starterkit",
  description:
    "Next.js 16 + React 19 + TailwindCSS v4 + shadcn/ui로 구성된 현대적인 스타터킷",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/your-username/claude-nextjs-starterkit",
  author: {
    name: "Your Name",
    url: "https://github.com/your-username",
  },
} as const;

export type SiteConfig = typeof siteConfig;
