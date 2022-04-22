import type {
    HttpFunction,
    Request,
    Response
} from '@google-cloud/functions-framework/build/src/functions';

export const cloudAuthenticator: HttpFunction = (
    _req: Request,
    res: Response
) => {
    res.status(200).send('Cloud Authenticator');
};
