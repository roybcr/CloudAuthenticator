import * as dotenv from 'dotenv';
import * as C from './constants';

const environment = dotenv.config();
if (environment.error) throw new Error('.env file is required');

const { env } = process;

export const config = () => ({
    PROJECT_ID: env[C.PROJECT_ID] as string,
    GRAPHQL_KEY: env[C.GRAPHQL_KEY] as string,
    BACKEND_URL: env[C.BACKEND_URL] as string,
    APP_CREDENTIALS: env[C.APP_CREDENTIALS] as string,
    SERVICE_ACCOUNT_EMAIL: env[C.SERVICE_ACCOUNT_EMAIL] as string
});
