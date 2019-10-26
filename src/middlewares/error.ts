import { RouterContext } from 'koa-router';

export const errorHandler = async (ctx: RouterContext, next: () => Promise<any>) => {
	try {
		await next();
	} catch (err) {
		ctx.status = err.statusCode || err.status || 500;
		ctx.body = {
			message: err.message,
		};
	}
};
