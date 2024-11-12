export default {
  routes: [
    {
      method: "GET",
      path: "/our-services/:slug",
      handler: "our-service.findOne",
    },
  ],
};
