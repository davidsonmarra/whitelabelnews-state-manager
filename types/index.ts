import type { AxiosError } from 'axios';

export interface IFetchBooks {}

export interface NewsDTO {}

export interface InitialStateNewsProps {
  search: string;
  isLoading: boolean;
  isEnd: boolean;
  error: Error | AxiosError;
  newsData: any[];
}
