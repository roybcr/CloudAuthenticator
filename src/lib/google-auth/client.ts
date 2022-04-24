import { GoogleAuth } from 'google-auth-library';
import { config, SCOPES } from '../../config';
import { TAuthClient } from '../../types/global.types';

const { APP_CREDENTIALS } = config();

const authClient = async (): Promise<TAuthClient> => {
    const auth = new GoogleAuth({
        keyFile: APP_CREDENTIALS,
        scopes: [SCOPES.cloudFunctions]
    });

    return await auth.getClient();
};

export default authClient;
