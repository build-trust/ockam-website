// eslint-disable-next-line max-classes-per-file
import { AxiosInstance, AxiosResponse } from 'axios';

import HttpClient from './HttpClient';

type UserMetadata = {
  plan?: string;
};

class ManagementAPI {
  private api: AxiosInstance;

  private baseServicePath: string;

  constructor(api: AxiosInstance) {
    this.api = api;
    this.baseServicePath = `/api/v2/users/`;
  }

  getUserMetadata(token: string, userId: string): Promise<AxiosResponse> {
    const url = `${this.baseServicePath}${userId}?fields=user_metadata`;
    return this.api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateUserMetadata(
    token: string,
    userId: string,
    userData: UserMetadata,
  ): Promise<AxiosResponse> {
    const url = `${this.baseServicePath}${encodeURI(userId)}`;
    return this.api.patch(
      url,
      {
        user_metadata: userData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}

class Auth0Api extends HttpClient {
  managementApi: ManagementAPI;

  constructor() {
    super('https://account.ockam.io', '');
    this.managementApi = new ManagementAPI(this.api);
  }
}

export default new Auth0Api();
