import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from './entity/categories';
import { Product } from './entity/product';
import { createSeedData } from './seed/categories';
import { Order } from './entity/order';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'P_1234',
  database: 'postgres',
  entities: [Category, Product, Order],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    createSeedData();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export default AppDataSource;
