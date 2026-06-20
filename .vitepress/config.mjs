import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🐝 0ffbee",
  description: "0ffbee's Thoughts and Writings",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Blog", link: "/blog/index.md" },
      { text: "Projects", link: "/project/index.md" },
      { text: "Archive", link: "/archive/index.md" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    // sidebar: [], // 关闭侧边栏

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/1f-e1se" },
      { icon: "x", link: "https://github.com/1f-e1se" },
      { icon: "bluesky", link: "https://github.com/1f-e1se" },
      { icon: "mastodon", link: "https://github.com/1f-e1se" },
      { icon: "rss", link: "https://github.com/1f-e1se" },
    ],
  },
});
