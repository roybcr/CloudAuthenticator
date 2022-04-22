import * as yup from 'yup';

export const userSchema = yup.object({
    uid: yup.string().uuid(),
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().notRequired()
});
