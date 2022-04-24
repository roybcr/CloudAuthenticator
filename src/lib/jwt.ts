import { JWT } from 'google-auth-library';

const PID = '';
export async function generateToken() {
    const client = new JWT({
        email: '',
        key: '',
        scopes: ['https://www.googleapis.com/auth/cloud-platform']
    });

    const url = `https://dns.googleapis.com/dns/v1/projects/${PID}`;
    const res = await client.request({ url });
    console.log(res.data);

    return res.data;
}
