export interface LeverPostingList {
  text: string;
  content: string;
}

export interface LeverPosting {
  id: string;
  text: string;
  description: string;
  descriptionPlain: string;
  additional: string;
  additionalPlan: string;
  applyUrl: string;
  hostedUrl: string;
  categories: {
    location: string;
    team: string;
  };
  lists: LeverPostingList[];
}

export interface LeverPostingsGroup {
  title: string;
  postings: LeverPosting[];
}
