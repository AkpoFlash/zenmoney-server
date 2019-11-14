import Koa from 'koa';
import { config } from 'dotenv';

import { routes, allowedMethods } from './routers';
import { errorHandler } from './middlewares/error';
import { getCurrencyExchange } from './middlewares/currencyExchange';

const app = new Koa();

config();

app.use(getCurrencyExchange);
app.use(errorHandler);
app.use(routes());
app.use(allowedMethods());

app.listen(Number(process.env.PORT), process.env.HOST, () =>
	console.log(`${process.env.HOST} listening at port ${process.env.PORT}`)
);
