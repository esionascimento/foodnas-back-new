import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import entities from '@/entities';
const path = require('path');

export const dataSourceOptions: DataSourceOptions = {
  url: process.env.DATABASE_URL,
  type: 'mysql',
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: entities,
  migrations: [
    'dist/database/migrations/*{.ts,.js}'
  ],
  synchronize: false,
  logging: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
const dataSource = new DataSource(dataSourceOptions);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization');
  });

export default dataSource;