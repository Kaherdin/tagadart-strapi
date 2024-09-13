/**
 * email-contact service
 */

export default {
  emailContactService: async (ctx) => {
    try {
      // Vérification des paramètres requis
      if (!ctx.request.body.data) {
        console.log(ctx.request.body);
        ctx.status = 400; // Bad Request
        ctx.body = { message: "Missing required fields data" };
        return ctx.body;
      }

      const { input, emailTo } = ctx.request.body.data || {};

      // Envoi de l'e-mail
      await strapi.plugins["email"].services.email.send({
        from: "onboarding@resend.dev",
        to: emailTo,
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      ctx.status = 200;
      ctx.body = { message: "Email sent successfully!" };
      return ctx.body;
    } catch (err) {
      console.error("Error in email sending:", err);
      return err;
    }
  },
};
