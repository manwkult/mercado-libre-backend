import App from '@/app';
import ItemsRoute from '@/routes/items.route';
import HealthRoute from './routes/health.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([ new ItemsRoute(), new HealthRoute() ]);

app.listen();
