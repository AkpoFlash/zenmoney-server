import { readFile } from './csv';

const Koa = require('koa');
const Router = require('koa-router');
const filter = require('lodash/filter');

const api = new Koa();
const router = new Router();

router.get('/', async (ctx: any) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	await readFile('data/zen_2019-10-12.csv').then(res => (ctx.body = res));
});

router.get('/getIncome', async (ctx: any) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	await readFile('data/zen_2019-10-12.csv')
		.then(res => filter(res, 'income'))
		.then(res => (ctx.body = res));
});

router.get('/getOutcome', async (ctx: any) => {
	ctx.set('Content-Type', 'application/json');
	ctx.set('Access-Control-Allow-Origin', '*');
	await readFile('data/zen_2019-10-12.csv')
		.then(res => filter(res, 'outcome'))
		.then(res => (ctx.body = res));
});

api.use(router.routes());
api.use(router.allowedMethods());

api.listen(3001);
