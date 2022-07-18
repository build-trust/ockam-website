import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiError extends Error {
  config: AxiosRequestConfig;

  data: AxiosResponse['data'];

  status: AxiosResponse['status'] | null;

  headers: AxiosResponse['headers'] | null;

  code: number | null;

  constructor(error: AxiosError) {
    super(error.message);
    this.name = 'ApiError';
    this.config = error.config;
    this.data = error?.response?.data || null;
    this.status = error?.response?.status || null;
    this.headers = error?.response?.headers || null;
    this.code = error?.response?.data
      ? (error?.response?.data as AxiosResponse['data']).code
      : null;
  }
}

export default ApiError;
