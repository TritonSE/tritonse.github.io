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
