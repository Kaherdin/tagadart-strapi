/**
 * A set of functions called "actions" for `email-contact`
 */

export default {
  send: async (ctx, next) => {
    try {
      const res = await strapi.service("api::email-contact.email-contact");
      // .emailService(ctx);
      try {
        console.log(ctx.request.body, "ctx.request.body");
        const input = ctx.request.body.data?.input;
        console.log(input, "input");
        const emailTo = ctx.request.body.data?.emailTo;
        console.log(emailTo, "emailTo");
        await strapi.plugins["email"].services.email.send({
          from: "onboarding@resend.dev",
          to: emailTo,
          subject: "Hello World",
          html: `<p>${input}</p>`,
        });

        console.log("ici");

        return {
          message: "Email sent!",
        };
      } catch (err) {
        console.log(err, "erreur");
        ctx.body = err;
      }
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
