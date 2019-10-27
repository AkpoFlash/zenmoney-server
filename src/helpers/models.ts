import { Cashify } from 'cashify';

export enum CURRENCY {
	EUR = 'EUR',
	RUB = 'RUB',
	USD = 'USD',
}

const _global: any = global;

export const convertToRUB = (currency: CURRENCY, value: string): number => {
	const rates = _global.currencyExchangeRates;
	const cashify = new Cashify({ base: CURRENCY.USD, rates });
	const convertedValue = cashify.convert(parseFloat(value), { from: currency, to: CURRENCY.RUB });

	switch (currency) {
		case CURRENCY.RUB:
			return convertedValue;
		case CURRENCY.EUR:
			return convertedValue;
		default:
			return convertedValue;
	}
};
