import Router, { RouterContext } from 'koa-router';

import { getTotal, getIncome } from '../models/income';
import { DATA_FILE_NAME } from '../helpers/models';

const router = new Router();

router.get('/income/total/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	const currencyExchangeRates = JSON.parse(ctx.cookies.get('currencyExchangeRates') || '');
	ctx.body = await getTotal(DATA_FILE_NAME, ctx.params.year, ctx.params.month, currencyExchangeRates);
});

router.get('/income/:year/:month', async (ctx: RouterContext) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	const currencyExchangeRates = JSON.parse(ctx.cookies.get('currencyExchangeRates') || '');
	ctx.body = await getIncome(DATA_FILE_NAME, ctx.params.year, ctx.params.month, currencyExchangeRates);
});

export default router;
