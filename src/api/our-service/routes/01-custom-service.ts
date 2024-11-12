export default {
  routes: [
    {
      method: "GET",
      path: "/our-service/:slug",
      handler: "our-service.findOne",
    },
  ],
};
