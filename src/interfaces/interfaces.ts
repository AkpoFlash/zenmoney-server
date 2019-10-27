import { CURRENCY } from '../helpers/models';

export interface ICSVResult {
	'﻿date': string;
	categoryName: string;
	payee: string;
	comment: string;
	outcomeAccountName: string;
	outcome: string;
	outcomeCurrencyShortTitle: CURRENCY;
	incomeAccountName: string;
	income: string;
	incomeCurrencyShortTitle: CURRENCY;
	createdDate: string;
	changedDate: string;
}
