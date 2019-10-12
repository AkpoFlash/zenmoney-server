import { readFile } from './csv';

const koa = require('koa');

const api = new koa();

api.use(async (ctx: any) => {
	await readFile('data/zen_2019-10-12.csv').then(res => (ctx.body = res));
});

api.listen(3001);
