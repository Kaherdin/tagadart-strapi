export default {
  routes: [
    {
      method: "POST",
      path: "/email-contact",
      handler: "email-contact.send",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
