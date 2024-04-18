import { DataSource } from 'typeorm';
import { DropOffEntity } from './DropOffEntity';

export const dropOffProviders = [
  {
    provide: 'CAR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DropOffEntity),
    inject: ['DATA_SOURCE'],
  },
];
