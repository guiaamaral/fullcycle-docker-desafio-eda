import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 3306,
                database: process.env.DB_NAME || '',
                username: process.env.DB_USER || '',
                password: process.env.DB_PASSWORD || '',
                entities: [
                    __dirname + '/../../**/*.entity{.ts,.js}'
                ],
                synchronize: true,
                // synchronize: process.env.NODE_ENV === 'local' ? true : false,
                logging: process.env.NODE_ENV === 'local' ? true : false,
            });
            return await dataSource.initialize();
        },
    },
];
