import Koa from 'koa';

import { routes, allowedMethods } from './routers';
import { errorHandler } from './middlewares/error';

const app = new Koa();

app.use(errorHandler);
app.use(routes());
app.use(allowedMethods());

app.listen(3001);
