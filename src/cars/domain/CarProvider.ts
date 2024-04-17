import { DataSource } from 'typeorm';
import { CarEntity } from './CarEntity';

export const carProviders = [
  {
    provide: 'CAR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CarEntity),
    inject: ['DATA_SOURCE'],
  },
];
