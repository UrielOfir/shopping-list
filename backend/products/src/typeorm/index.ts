import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Category } from './entity/categories';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'P_1234',
  database: 'postgres',
  entities: [Category],
  synchronize: true,
  logging: false,
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));

  export default AppDataSource;