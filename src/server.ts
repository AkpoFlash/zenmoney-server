import Koa from 'koa';
import config from 'config';

import { routes, allowedMethods } from './routers';
import { errorHandler } from './middlewares/error';
import { IConfig } from './interfaces/config';
import { getCurrencyExchange } from './middlewares/currencyExchange';

const app = new Koa();
const defaultConfig = config.get<IConfig>('default');

app.use(getCurrencyExchange);
app.use(errorHandler);
app.use(routes());
app.use(allowedMethods());

app.listen(defaultConfig.server.port, defaultConfig.server.host, () =>
	console.log('%s listening at port %d', defaultConfig.app.name, defaultConfig.server.port)
);
