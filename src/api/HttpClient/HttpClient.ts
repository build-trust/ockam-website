import axios, { AxiosError, AxiosInstance } from 'axios';

import ApiError from './models/ApiError';

class HttpClient {
  protected api: AxiosInstance;

  constructor(baseUrl: string, path: string) {
    this.api = axios.create({ baseURL: `${baseUrl}${path}` });
    this.api.interceptors.response.use(HttpClient.afterResponse, HttpClient.responseError);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static afterResponse(resp: any): any {
    return {
      ...resp,
      data: resp.data,
    };
  }

  static responseError(error: AxiosError): ApiError {
    throw new ApiError(error);
  }
}

export default HttpClient;
