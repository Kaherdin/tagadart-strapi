export default {
  routes: [
    {
      method: "GET",
      path: "/projects/:slug",
      handler: "project.findOne",
    },
  ],
};
