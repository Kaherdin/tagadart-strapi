/**
 * our-service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
    "api::our-service.our-service",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { slug } = ctx.params;

            const query = {
                filters: { slug },
                ...ctx.query,
            };

            const service = await strapi.entityService.findMany(
                "api::our-service.our-service",
                query
            );

            const sanitizedEntity = await this.sanitizeOutput(service, ctx);

            return this.transformResponse(sanitizedEntity[0]);
        },
    })
);