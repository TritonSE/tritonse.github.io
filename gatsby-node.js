exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  const redirects = [
    {
      fromPath: "/alumni",
      toPath: "/about",
    },
    {
      fromPath: "/apply",
      toPath: "/students",
    },
    {
      fromPath: "/winners",
      toPath: "/",
    },
    {
      fromPath: "/project/uweast-ck-website",
      toPath: "/projects/uweast-community-kitchen",
    },
    {
      fromPath: "/project/dynamics-website",
      toPath: "/projects",
    },
    {
      fromPath: "/project/greenpoint-app",
      toPath: "/projects",
    },
    {
      fromPath: "/project/ihc-emr-app",
      toPath: "/projects",
    },
    {
      fromPath: "/project/ihc-wellness-app",
      toPath: "/projects",
    },
    {
      fromPath: "/project/kc-linking-app",
      toPath: "/projects",
    },
    {
      fromPath: "/project/kc-skilled-impact-app",
      toPath: "/projects",
    },
    {
      fromPath: "/project/cch-website",
      toPath: "/projects",
    },
    {
      fromPath: "/project/oic-website",
      toPath: "/projects",
    },
    {
      fromPath: "/project/ssa-website",
      toPath: "/projects",
    },
  ];

  redirects.forEach((redirect) => {
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
