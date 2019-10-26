import Router from 'koa-router';

import outcome from './outcome';
import income from './income';

const router = new Router();

[outcome, income].forEach(r => router.use(r.routes(), r.allowedMethods()));

export const routes = router.routes.bind(router);
export const allowedMethods = router.allowedMethods.bind(router);
