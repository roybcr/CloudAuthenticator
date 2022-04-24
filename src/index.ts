import type {
    HttpFunction,
    Request,
    Response
} from '@google-cloud/functions-framework/build/src/functions';

import authClient from './lib/google-auth/client';
import gqlClient from './lib/gql/client';
import jwtClient from './lib/jwt';

const GetUserByPhone = `query GetUserByPhoneQuery($phone: String!) {
    userByPhone(phone: $phone) {
        uid
        name
        email
        phone
        role
    }
}
`;

export const cloudAuthenticator: HttpFunction = async (req: Request, res: Response) => {
    await authClient();
    const body = req.body;
    const phone = body.phone as string | undefined;

    const query = await gqlClient.request(GetUserByPhone, { phone: phone || '' });

    console.log('QUERY DATA: ');
    console.debug(JSON.stringify(query));

    const user = query.userByPhone;

    if (user) {
        const accessToken = await (await jwtClient(user)).getAccessToken();
        console.log('ACCESS TOKEN: ');
        console.debug(accessToken.token);
        res.status(200).send(accessToken);
    } else {
        res.status(500).end('USER NOT FOUND!');
    }
};
