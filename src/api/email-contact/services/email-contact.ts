/**
 * email-contact service
 */

export default {
  emailContactService: async (ctx) => {
    try {
      const { input, emailTo } = ctx.request.body.data || {};

      // Vérification des paramètres requis
      // if (!input || !emailTo) {
      //   ctx.status = 400; // Bad Request
      //   return (ctx.body = {
      //     error: "Missing required fields: 'input' or 'emailTo'.",
      //   });
      // }

      // Envoi de l'e-mail
      await strapi.plugins["email"].services.email.send({
        from: "onboarding@resend.dev",
        to: emailTo,
        subject: "Hello World",
        html: `<p>${input}</p>`,
      });

      ctx.status = 200;
      ctx.body = { message: "Email sent successfully!" };
    } catch (err) {
      if (err.response) {
        ctx.status = err.response.status || 500;
        ctx.body = {
          error: err.response.data || "External service error.",
        };
      } else {
        ctx.status = 500;
        ctx.body = {
          error: "Internal server error.",
          details: err.message,
        };
      }
    }
  },
};
