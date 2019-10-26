import fs from 'fs';
import csv from 'csv-parser';

import { ICSVResult } from '../interfaces/interfaces';

export const readFile = (path: string) => {
	return new Promise<ICSVResult[]>((res, rej) => {
		const result: ICSVResult[] = [];

		fs.createReadStream(path)
			.pipe(csv())
			.on('data', (row: ICSVResult) => result.push(row))
			.on('end', () => res(result))
			.on('error', (err: Error) => rej(err));
	});
};
