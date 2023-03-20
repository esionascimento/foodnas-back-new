import { Usuario } from "src/entities/usuario.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: [Usuario],
  migrations: ['dist/db/migrations/*.ts'],
  synchronize: false,
  logging: true,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;