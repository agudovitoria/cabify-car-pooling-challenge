import { DataSource } from 'typeorm';
import { CarEntity } from './Car.entity';

export const carProviders = [
  {
    provide: 'CAR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarEntity),
    inject: ['DATA_SOURCE'],
  },
];
