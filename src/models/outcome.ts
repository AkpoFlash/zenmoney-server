import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import { isSameMonth } from 'date-fns';

import { readFile } from '../helpers/csv';
import { ICSVResult } from '../interfaces/interfaces';
import { convertToRUB, isValued } from '../helpers/models';

export const getTotal = (
	data: string,
	year: string,
	month: string,
	currencyExchangeRates: object
): Promise<string | void> => {
	return readFile(data)
		.then((res: ICSVResult[]) => isValued(res, 'outcome'))
		.then(res => filter(res, row => isSameMonth(new Date(row['﻿date']), new Date(`${year}-${month}`))))
		.then(res =>
			reduce(
				res,
				(total, row): number =>
					(total += convertToRUB(row.outcomeCurrencyShortTitle, row.outcome, currencyExchangeRates)),
				0
			).toFixed(2)
		)
		.catch((err: Error) => console.error(err));
};

export const getOutcome = (data: string, year: string, month: string, currencyExchangeRates: object) => {
	return readFile(data)
		.then((res: ICSVResult[]) => isValued(res, 'outcome'))
		.then(res => filter(res, row => isSameMonth(new Date(row['﻿date']), new Date(`${year}-${month}`))))
		.then(res =>
			res.map(row => ({
				...row,
				outcome: convertToRUB(row.outcomeCurrencyShortTitle, row.outcome, currencyExchangeRates).toFixed(2),
			}))
		)
		.catch((err: Error) => console.error(err));
};
