export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61b031730733d268ba26a52b",
                  title: "Sanity Studio",
                  name: "siteone-studio",
                  apiId: "49a5bcfe-6481-4ced-9d7d-2668100190aa",
                },
                {
                  buildHookId: "61b031739b12d58181dcac0a",
                  title: "Blog Website",
                  name: "siteone-web",
                  apiId: "b11a4929-d3f6-4664-8460-a175161244d1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/AlexJannatpour/SiteOne",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://siteone-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
