import 'reflect-metadata';
import 'source-map-support/register';

import app from './app';

const PORT: number = Number.parseInt(process.env.PORT!, 10) || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server is running on port ${PORT}`);
});
