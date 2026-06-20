import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "🐝0ffbee",
  EMAIL: "demo@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x/twitter",
    HREF: "https://x.com",
  },
  {
    NAME: "bluesky",
    HREF: "",
  },
  {
    NAME: "mastodon",
    HREF: "",
  },
  {
    NAME: "github",
    HREF: "https://github.com",
  },
];
