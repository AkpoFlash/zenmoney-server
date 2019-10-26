import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import { isSameMonth } from 'date-fns';

import { readFile } from '../csv';
import { ICSVResult } from '../interfaces/interfaces';

export const getTotal = (data: string, year: string, month: string) => {
	return readFile(data)
		.then((res: ICSVResult[]) => filter(res, 'income'))
		.then(res => filter(res, row => isSameMonth(new Date(row['﻿date']), new Date(`${year}-${month}`))))
		.then(res => reduce(res, (total, row) => (total += parseFloat(row.income)), 0))
		.catch((err: Error) => console.error(err));
};

export const getIncome = (data: string, year: string, month: string) => {
	return readFile(data)
		.then((res: ICSVResult[]) => filter(res, 'income'))
		.then(res => filter(res, row => isSameMonth(new Date(row['﻿date']), new Date(`${year}-${month}`))))
		.then(res => res)
		.catch((err: Error) => console.error(err));
};
