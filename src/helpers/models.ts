import filter from 'lodash/filter';
import { Cashify } from 'cashify';
import { config } from 'dotenv';

import { ICSVResult } from '../interfaces/interfaces';

config();

export enum CURRENCY {
	EUR = 'EUR',
	RUB = 'RUB',
	USD = 'USD',
}

export const DATA_FILE_NAME = `${process.env.PATH_TO_RESOURCES}/zen_2019-10-24.csv`;

export const convertToRUB = (currency: CURRENCY, value: string, currencyExchangeRates: object): number => {
	const cashify = new Cashify({ base: CURRENCY.USD, rates: currencyExchangeRates });
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

export const isValued = <T extends ICSVResult[], K extends keyof ICSVResult>(res: T, key: K): ICSVResult[] =>
	filter(res, row => parseFloat(row[key]) > 0);
