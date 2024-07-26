import type { NextApiRequest, NextApiResponse } from 'next';

const updateTackle = async (
  productid: string,
  customerid: string,
  company: string,
  email: string,
  name: string,
): Promise<void> => {
  try {
    const authenticationResponse = await fetch('https://api.tackle.io/v1/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept: ': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.TACKLE_CLIENT_ID,
        client_secret: process.env.TACKLE_CLIENT_SECRET,
      }),
    });
    const bearerToken = (await authenticationResponse.json()).access_token;

    await fetch('https://api.tackle.io/v1/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization: ': `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({
        productid,
        customerid,
        details: {
          Company: company,
          'Email Address': email,
          'Full Name': name,
        },
      }),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error({ error });
  }
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const res = await fetch(`${process.env.OCKAM_API_BASE_URL}/update_subscription`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ockam-api-key': process.env.OCKAM_API_KEY as string,
    },
    body: JSON.stringify(request.body),
  });

  await updateTackle(request.body.productId, request.body.customerId, '', request.body.email, '');

  if (res.status === 200) {
    const data = await res.json();
    response.json(data);
  } else {
    response.status(res.status).send('Error.');
  }
}
