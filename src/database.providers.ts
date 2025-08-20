import { DataSource, DataSourceOptions } from 'typeorm';
import database from '../ormconfig.json';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(database as DataSourceOptions);

      return dataSource.initialize();
    },
  },
];
