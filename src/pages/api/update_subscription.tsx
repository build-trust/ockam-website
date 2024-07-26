import type { NextApiRequest, NextApiResponse } from 'next';

const updateTackle = async (
  productid: string,
  customerid: string,
  company: string,
  email: string,
  name: string,
): Promise<void> => {
  try {
    await fetch('https://api.tackle.io/v1/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization: ': `Bearer ${process.env.TACKLE_TOKEN as string}`,
      },
      body: JSON.stringify({
        productid: productid,
        customerid: customerid,
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
