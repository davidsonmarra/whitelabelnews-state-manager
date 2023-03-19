import type { AxiosError } from 'axios';

export interface IFetchNews {
  offset?: number;
  language?: string;
  search?: string;
}

export interface NewsDTO {}

export interface InitialStateNewsProps {
  search: string;
  isLoading: boolean;
  isEnd: boolean;
  error: Error | AxiosError;
  newsData: any[];
}
