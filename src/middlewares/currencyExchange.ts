import fetch from 'node-fetch';

import { appId } from '../secure_data';
import { RouterContext } from 'koa-router';

export const openExchangeAPI = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;
const _global: any = global;

export const getCurrencyExchange = async (ctx: RouterContext, next: () => Promise<any>) => {
	if (!_global.currencyExchangeRates) {
		_global.currencyExchangeRates = await fetch(openExchangeAPI)
			.then(res => res.json())
			.then(res => res.rates);
	}

	await next();
};
