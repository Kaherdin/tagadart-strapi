/**
 * email-contact service
 */

export default {
  emailContactService: async (ctx) => {
    console.log(ctx.request.body, "ctx.request.body");
    try {
      if (!ctx.request.body.data) {
        console.log(ctx.request.body);
        ctx.status = 400; // Bad Request
        ctx.body = { message: "Missing required fields data" };
        return ctx.body;
      }

      const { input, emailTo } =
        typeof ctx.request.body.data === "string"
          ? JSON.parse(ctx.request.body.data)
          : ctx.request.body.data;

      await strapi.plugins["email"].services.email.send({
        from: process.env.RESEND_DEFAULT_FROM,
        to: emailTo,
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      ctx.status = 200;
      ctx.body = { message: "Email sent successfully!" };
      return ctx.body;
    } catch (err) {
      console.error("Error in email sending:", err);
      throw new Error(err);
      return err;
    }
  },
};
