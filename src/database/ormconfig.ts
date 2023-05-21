import { DataSource, DataSourceOptions } from 'typeorm';
import entities from '@/entities';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  // url: process.env.DATABASE_URL,
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: entities,
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
  // extra: {
  //   ssl: {
  //     rejectUnauthorized: false,
  //   },
  // },
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
