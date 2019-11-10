import Router, { RouterContext } from 'koa-router';

import { getTotal, getOutcome } from '../models/outcome';
import { DATA_FILE_NAME } from '../helpers/models';

const router = new Router();

router.get('/outcome/total/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	const currencyExchangeRates = JSON.parse(ctx.cookies.get('currencyExchangeRates') || '');
	ctx.body = await getTotal(DATA_FILE_NAME, ctx.params.year, ctx.params.month, currencyExchangeRates);
});

router.get('/outcome/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	const currencyExchangeRates = JSON.parse(ctx.cookies.get('currencyExchangeRates') || '');
	ctx.body = await getOutcome(DATA_FILE_NAME, ctx.params.year, ctx.params.month, currencyExchangeRates);
});

export default router;
