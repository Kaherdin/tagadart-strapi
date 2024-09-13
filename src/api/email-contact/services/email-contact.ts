/**
 * email-contact service
 */

export default {
  emailService: async (ctx) => {
    try {
      console.log(ctx.request.body, "ctx.request.body");
      const input = ctx.request.body.data?.input;
      const emailTo = ctx.request.body.data?.emailTo;
      await strapi.plugins["email"].services.email.send({
        from: "onboarding@resend.dev",
        to: emailTo,
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      return {
        message: "Email sent!",
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
