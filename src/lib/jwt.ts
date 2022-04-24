import { JWT } from 'google-auth-library';
import { config, SCOPES } from '../config';
import { TUser } from '../types/schema.types';

const { APP_CREDENTIALS } = config();

export async function generateToken(user: TUser) {
    const jwtClient = new JWT({
        keyFile: APP_CREDENTIALS,
        scopes: [SCOPES.cloudFunctions],
        additionalClaims: { ...user }
    });

    console.log('JWT CLIENT: ');
    console.debug(JSON.stringify(jwtClient));

    return jwtClient;
}

export default generateToken;
