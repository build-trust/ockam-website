// eslint-disable-next-line max-classes-per-file
import { AxiosInstance, AxiosResponse } from 'axios';

import CONFIG from '@config';

import HttpClient from './HttpClient';

class GithubReposService {
  private api: AxiosInstance;

  private baseServicePath: string;

  constructor(api: AxiosInstance, owner: string) {
    this.api = api;
    this.baseServicePath = `/repos/${owner}`;
  }

  getRepoContents(repo: string, path: string): Promise<AxiosResponse<{ content: string }>> {
    return this.api.get(`${this.baseServicePath}/${repo}/contents/${path}`);
  }

  getRepo(repo: string): Promise<AxiosResponse<{ stargazers_count: number }>> {
    return this.api(`${this.baseServicePath}/${repo}`);
  }
}

class GithubApi extends HttpClient {
  reposService: GithubReposService;

  private owner: string;

  constructor(owner: string) {
    super(CONFIG.github.apiUrl, '');
    this.owner = owner;
    this.reposService = new GithubReposService(this.api, this.owner);
  }
}

export default new GithubApi(CONFIG.github.ownerName);
