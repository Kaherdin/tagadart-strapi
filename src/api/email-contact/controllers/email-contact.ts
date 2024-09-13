/**
 * A set of functions called "actions" for `email-contact`
 */

export default {
  send: async (ctx) => {
    try {
      const res = await strapi
        .service("api::email-contact.email-contact")
        .emailContactService(ctx);
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
