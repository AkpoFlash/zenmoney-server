import Router, { RouterContext } from 'koa-router';
import { getTotal, getIncome } from '../models/income';

const router = new Router();

const data = 'data/zen_2019-10-24.csv';

router.get('/income/total/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.body = await getTotal(data, ctx.params.year, ctx.params.month);
});

router.get('/income/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.body = await getIncome(data, ctx.params.year, ctx.params.month);
});

export default router;
