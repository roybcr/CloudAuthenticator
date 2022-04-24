import { GraphQLClient } from 'graphql-request';
import Config from '../../config/config';

const { BACKEND_URL, GRAPHQL_KEY } = Config();

const headers = (token: string) => ({
    authorization: `Bearer ${token}`
});

const gqlClient = new GraphQLClient(BACKEND_URL, { headers: headers(GRAPHQL_KEY) });

export default gqlClient;
