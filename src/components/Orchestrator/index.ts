import axios, { AxiosInstance, AxiosResponse } from 'axios';

type Subscription = {
  name: string;
};
type Space = {
  id: string;
  name: string;
  insertedAt: Date;
  subscription_plan: Subscription;
};

const logError = (error: unknown): void => {
  if (console) {
    console.log('ERR - Orchestrator: ', error);
  }
};
class OrchestratorAPI {
  static updateBuyerContact = async (
    token: string,
    productId: string,
    customerId: string,
    name: string,
    company: string,
    email: string,
  ): Promise<AxiosResponse> => {
    const response = await axios.post('/api/update_subscription', {
      productId,
      customerId,
      company,
      name,
      email,
    });
    return response.data;
  };

  private api: AxiosInstance;

  private baseServicePath?: string;

  constructor(baseUrl: string, path?: string) {
    this.api = axios.create({ baseURL: baseUrl });
    this.baseServicePath = path || '';
  }

  getSpaces = async (token: string): Promise<Space[] | undefined> => {
    try {
      const url = `${this.baseServicePath}/space`;
      const spaces = await this.api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return spaces.data;
    } catch (error) {
      logError(error);
      return undefined;
    }
  };

  getSpace = async (token: string, spaceId: string): Promise<Space | undefined> => {
    try {
      const url = `${this.baseServicePath}/space/${spaceId}`;
      const space = await this.api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return space.data;
    } catch (error) {
      logError(error);
      return undefined;
    }
  };

  createSpace = async (token: string, plan: string): Promise<Space | undefined> => {
    try {
      const url = `${this.baseServicePath}/space`;
      const response = await this.api.put(
        url,
        {
          plan,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      logError(error);
    }
    return undefined;
  };

  updatePlan = async (token: string, spaceId: string, plan: string): Promise<void> => {
    try {
      const url = `${this.baseServicePath}/space/${spaceId}`;
      await this.api.post(
        url,
        {
          plan,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      logError(error);
    }
  };
}

export type { Space };
export { OrchestratorAPI };
export default new OrchestratorAPI(
  process.env.OCKAM_API_BASE_URL || 'https://subscriptions.orchestrator.ockam.io/',
);
