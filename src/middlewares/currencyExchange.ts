import fetch from 'node-fetch';
import { config } from 'dotenv';
import { RouterContext } from 'koa-router';

config();

export const openExchangeAPI = `https://openexchangerates.org/api/latest.json?app_id=${process.env.OPEN_EXCHANGE_API_KEY}`;

export const getCurrencyExchange = async (ctx: RouterContext, next: () => Promise<any>) => {
	if (!ctx.cookies.get('currencyExchangeRates')) {
		const response = await fetch(openExchangeAPI)
			.then(res => res.json())
			.then(res => res.rates);
		ctx.cookies.set('currencyExchangeRates', JSON.stringify(response), { maxAge: 1000 * 60 * 60 * 24 });
	}

	await next();
};
