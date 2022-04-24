import { GraphQLClient } from 'graphql-request';
import { config } from '../../config';

const { BACKEND_URL, GRAPHQL_KEY } = config();

const headers = (token: string) => ({
    authorization: `Bearer ${token}`
});

const gqlClient = new GraphQLClient(BACKEND_URL, { headers: headers(GRAPHQL_KEY) });

export default gqlClient;
