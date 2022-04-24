import * as dotenv from 'dotenv';
import * as C from './constants';

const environment = dotenv.config();
if (environment.error) throw new Error('.env file is required');

const { env } = process;

export default () => ({
    GRAPHQL_KEY: env[C.GRAPHQL_KEY] as string,
    BACKEND_URL: env[C.BACKEND_URL] as string
});
