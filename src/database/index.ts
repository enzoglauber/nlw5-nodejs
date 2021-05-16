import { Connection, createConnection, getConnectionOptions } from 'typeorm';

const connection = async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  const options = Object.assign(defaultOptions, {
    database: process.env.NODE_ENV === 'test'
      ? "./src/database/database.test.sqlite"
      : defaultOptions.database
  });

  return createConnection(options);
}

connection();
