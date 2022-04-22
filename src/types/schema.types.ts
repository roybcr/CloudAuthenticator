import { InferType } from 'yup';
import { userSchema } from '../schemas';

export type TUser = InferType<typeof userSchema>;
