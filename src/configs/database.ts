import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'carfusion',
  //   entities: [__dirname + './../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
};

// database
//   .initialize()
//   .then(() => {
//     console.log('Database connected');
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err);
//   });
