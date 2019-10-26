import Router, { RouterContext } from 'koa-router';

import { getTotal, getOutcome } from '../models/outcome';

const router = new Router();

const data = 'data/zen_2019-10-24.csv';

router.get('/outcome/total/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.body = await getTotal(data, ctx.params.year, ctx.params.month);
});

router.get('/outcome/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.body = await getOutcome(data, ctx.params.year, ctx.params.month);
});

export default router;
