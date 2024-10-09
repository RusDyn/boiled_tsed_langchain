import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import methodOverride from 'method-override';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(methodOverride());

// Routes
// TODO: Add your routes here
// add default route
app.get('/', (_, response) => {
  response.send('Hello World');
});

// Global error handler
app.use((error: any, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).send('Internal Server Error');
});

export default app;
