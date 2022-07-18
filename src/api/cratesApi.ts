// eslint-disable-next-line max-classes-per-file
import { AxiosInstance, AxiosResponse } from 'axios';

import CONFIG from '@config';

import HttpClient from './HttpClient';

class CratesService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  getProjects(projects: string[]): Promise<AxiosResponse[]> {
    return Promise.all(projects.map((project) => this.api.get(`crates/${project}`)));
  }
}

class CratesApi extends HttpClient {
  cratesService: CratesService;

  constructor() {
    super(CONFIG.crates.apiUrl, '');
    this.cratesService = new CratesService(this.api);
  }
}

export default new CratesApi();
