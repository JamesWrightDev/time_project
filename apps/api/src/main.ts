import express from 'express';
import { timerHandler } from './handlers/time.handler';
import { auth } from './middleware/auth.middleware';
import prometheusMiddleware from 'express-prometheus-middleware';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());

app.use(auth);

app.get('/time', timerHandler);
app.get('/metrics', prometheusMiddleware({ collectDefaultMetrics: true }));

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

export default app;
