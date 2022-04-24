import { Compute } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';

export type TAuthClient = JSONClient | Compute;
