import axios, { AxiosInstance } from 'axios';

type UserDetails = {
  name?: string;
  company?: string;
  company_domain?: string;
};
type User = {
  email?: string;
  accepted_tos?: boolean;
  details?: UserDetails;
};
type Subscription = {
  name: string;
};
type PaymentMethod = {
  id: string;
  created_by: string;
  customer_id: string;
  marketplace: string;
};
type Space = {
  id: string;
  name: string;
  subscription_plan?: Subscription;
  payment_method?: PaymentMethod;
};
type PaymentDelegate = {
  email: string;
  id: string;
  inserted_at: Date;
  space_id: string;
};

const logError = (error: unknown): void => {
  if (console) {
    // eslint-disable-next-line no-console
    console.log('ERR - Orchestrator: ', error);
  }
};

class UnverifiedEmailError extends Error {}
class OrchestratorAPI {
  private api: AxiosInstance;

  constructor(baseUrl: string, token: string) {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request = async (
    method: string,
    url: string,
    data?: { [key: string]: string | boolean | { [key: string]: string } },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    try {
      const response = await this.api.request({ method, url, data });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.data) {
          switch (error.response.data) {
            case 'Unverified Email':
              throw new UnverifiedEmailError();
              break;
          }
        }
      }
      logError(error);
      return undefined;
    }
  };

  getUser = async (): Promise<User | undefined> => {
    return this.request('get', '/user');
  };

  updateToS = async (accepted_tos: boolean): Promise<User | undefined> => {
    return this.request('put', '/user', { accepted_tos });
  };

  updateUserDetails = async (details: { [key: string]: string }) => {
    return this.request('put', '/user', { details });
  };

  createPaymentMethod = async (
    productId: string,
    customerId: string,
    accountId: string,
  ): Promise<PaymentMethod | undefined> => {
    const url = '/payment_method';
    const data = {
      aws_product_id: productId,
      aws_customer_id: customerId,
      aws_account_id: accountId,
    };
    return this.request('put', url, data);
  };

  // eslint-disable-next-line class-methods-use-this
  updateBuyerContact = async (
    name: string,
    company: string,
    email: string,
    productId: string,
    customerId: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    const api = axios.create({ baseURL: 'https://www.ockam.io' });
    const url = '/api/update_subscription';
    const data = { company, name, email, productId, customerId };
    return api.post(url, data);
  };

  getSpaces = async (): Promise<Space[] | undefined> => {
    const url = `/space`;
    return this.request('get', url);
  };

  getSpace = async (spaceId: string): Promise<Space | undefined> => {
    const url = `/space/${spaceId}`;
    return this.request('get', url);
  };

  createSpace = async (plan: string): Promise<Space | undefined> => {
    const url = `/space`;
    const data = { plan: plan.toLowerCase() };
    return this.request('put', url, data);
  };

  updatePlan = async (spaceId: string, plan: string): Promise<Space | undefined> => {
    let p = plan.toLocaleLowerCase();
    if (p === 'free' || p === 'premium') p = 'developer-' + p;
    const url = `/space/${spaceId}`;
    const data = { plan: p };
    return this.request('post', url, data);
  };

  updatePaymentMethod = async (
    spaceId: string,
    paymentMethodId: string,
  ): Promise<Space | undefined> => {
    const url = `/space/${spaceId}`;
    const data = { payment_method_id: paymentMethodId };
    return this.request('post', url, data);
  };

  createPaymentDelegate = async (
    spaceId: string,
    email: string,
  ): Promise<PaymentDelegate | undefined> => {
    const data = {
      space_id: spaceId,
      email,
    };
    return this.request('put', '/payment_delegate', data);
  };

  getPaymentDelegate = async (delegateId: string): Promise<PaymentDelegate | undefined> => {
    const url = `/payment_delegate/${delegateId}`;
    return this.request('get', url);
  };
}

export type { Space, User };
export { OrchestratorAPI, UnverifiedEmailError };
export default OrchestratorAPI;
