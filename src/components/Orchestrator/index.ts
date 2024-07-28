import axios, { AxiosInstance, AxiosResponse } from 'axios';

class OrchestratorAPI {
  private api: AxiosInstance;

  private baseServicePath?: string;

  constructor(baseUrl: string, path?: string) {
    this.api = axios.create({ baseURL: baseUrl });
    if (path) this.baseServicePath = path;
  }

  getSpaces(token: string): Promise<AxiosResponse> {
    const url = `${this.baseServicePath}/space`;
    return this.api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getSpace(token: string, spaceId: string): Promise<AxiosResponse> {
    const url = `${this.baseServicePath}/space/${spaceId}`;
    return this.api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createSpace(token: string, plan: string): Promise<AxiosResponse> {
    const url = `${this.baseServicePath}/space`;
    return this.api.put(
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
  }

  updatePlan(token: string, spaceId: string, plan: string): Promise<AxiosResponse> {
    const url = `${this.baseServicePath}/space/${spaceId}`;
    return this.api.post(
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
  }
}

export default new OrchestratorAPI(process.env.OCKAM_API_BASE_URL || 'http://localhost:3001/');
