import type { AxiosError } from 'axios';
import type { InitialStateNewsProps } from 'types';

export const initialState: InitialStateNewsProps = {
  search: 'spider-man',
  isLoading: false,
  isEnd: false,
  error: {} as Error | AxiosError,
  newsData: [],
};
