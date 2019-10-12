import { ICSVResult } from './interfaces';

const fs = require('fs');
const csv = require('csv-parser');
const isEmpty = require('lodash/isEmpty');
const mapKeys = require('lodash/mapKeys');

export const readFile = (path: string) => {
	return new Promise((res, rej) => {
		const result: ICSVResult[] = [];
		let header: ICSVResult;

		fs.createReadStream(path)
			.pipe(csv())
			.on('data', (row: ICSVResult) => {
				if (!isEmpty(row)) {
					if (isEmpty(header)) {
						header = row;
					} else {
						result.push(mapKeys(row, (value: string, key: keyof ICSVResult) => header[key]));
					}
				}
			})
			.on('end', () => res(result))
			.on('error', (err: Error) => rej(err));
	});
};
