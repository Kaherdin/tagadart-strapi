import { parseBody } from "../../../utils/helper";

const { parseMultipartData } = require("@strapi/utils");
const fs = require("fs");
/**
 * email-contact service
 */

export default {
  emailContactService: async (ctx) => {
    try {
      if (!ctx.request.body.data) {
        ctx.status = 400;
        ctx.body = { message: "Missing required fields data" };
        return ctx.body;
      }

      //TODO: Change if to check if image
      const data =
        typeof ctx.request.body.data === "string"
          ? parseBody(ctx).data
          : ctx.request.body.data;
      console.log(data, "data");
      console.log(typeof ctx.request.body.data, "ctx.request.body.data type");

      //Attachements
      // let attachements = [];
      // if (files?.media?.length > 0) {
      //   attachements = files?.media?.map((file) => {
      //     return {
      //       filename: file.name,
      //       content: fs.readFileSync(file.path).toString("base64"),
      //     };
      //   });
      // } else if (files.media) {
      //   attachements = [
      //     {
      //       filename: files.media.name,
      //       content: fs.readFileSync(files.media.path).toString("base64"),
      //     },
      //   ];
      // }

      function generateEmailContent(data) {
        let htmlContent = "";
        let textContent = "";

        for (const [key, value] of Object.entries(data)) {
          htmlContent += `<p><b>${key}</b> : ${value}</p>`;
          textContent += `${key} : ${value}\n`;
        }

        return { htmlContent, textContent };
      }

      const { htmlContent, textContent } = generateEmailContent(data);

      const emailTemplate = {
        subject: data.subject || "Contact via le site web",
        html: htmlContent,
        text: textContent,
      };

      await strapi.plugins["email"].services.email.send({
        from: process.env.RESEND_DEFAULT_FROM,
        to: data.emailTo,
        ...emailTemplate,
        // subject: "Hello World",
        // html: `<p>${input}</p>`,
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
