import App from '@/app';
import ItemsRoute from '@/routes/items.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([ new ItemsRoute()]);

app.listen();
