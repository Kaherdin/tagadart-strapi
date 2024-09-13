import { parseMultipartData } from "@strapi/utils";
import type Koa from "koa";
export function parseBody(ctx: Koa.Context) {
  if (ctx.is("multipart")) {
    return parseMultipartData(ctx);
  }

  const { data } = ctx.request.body || ctx.throw(400, "Data is undefined");

  return { data };
}
