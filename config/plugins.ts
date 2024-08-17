export default ({ env }) => ({
    // upload: {
    //   config: {
    //     provider: "cloudinary",
    //     providerOptions: {
    //       cloud_name: env("CLOUDINARY_NAME"),
    //       api_key: env("CLOUDINARY_KEY"),
    //       api_secret: env("CLOUDINARY_SECRET"),
    //     },
    //   },
    // },
    // wysiwyg: {
    //   enabled: false,
    //   resolve: "./src/plugins/wysiwyg",
    // },
  
    transformer: {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
      },
    },
  });
  