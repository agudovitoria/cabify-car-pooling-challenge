import { DataSource } from 'typeorm';
import { JourneyEntity } from './JourneyEntity';

export const journeyProviders = [
  {
    provide: 'JOURNEY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(JourneyEntity),
    inject: ['DATA_SOURCE'],
  },
];
