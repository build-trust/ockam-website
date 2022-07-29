// eslint-disable-next-line max-classes-per-file
import { AxiosInstance, AxiosResponse } from 'axios';

import CONFIG from '@config';
import { LeverPosting, LeverPostingsGroup } from '@typings/lever';

import HttpClient from './HttpClient';

class LeverPostingsService {
  private api: AxiosInstance;

  private baseServicePath: string;

  constructor(api: AxiosInstance, site: string) {
    this.api = api;
    this.baseServicePath = `/postings/${site}`;
  }

  getAllRoles(): Promise<AxiosResponse<LeverPosting[]>> {
    return this.api.get(`${this.baseServicePath}`, {
      params: {
        mode: 'json',
      },
    });
  }

  getGroupedRoles(): Promise<AxiosResponse<LeverPostingsGroup[]>> {
    return this.api.get(`${this.baseServicePath}`, {
      params: {
        mode: 'json',
        group: 'team',
      },
    });
  }

  getRole(roleId: string): Promise<AxiosResponse<LeverPosting>> {
    return this.api(`${this.baseServicePath}/${roleId}`, {
      params: { mode: 'json' },
    });
  }
}

class LeverApi extends HttpClient {
  postingsService: LeverPostingsService;

  private site: string;

  constructor(site: string) {
    super(CONFIG.lever.apiUrl, '');
    this.site = site;
    this.postingsService = new LeverPostingsService(this.api, this.site);
  }
}

export default new LeverApi(CONFIG.lever.siteName);
