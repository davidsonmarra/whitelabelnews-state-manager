import type { AxiosError } from 'axios';
import type { InitialStateNewsProps } from 'types';

export const initialState: InitialStateNewsProps = {
  search: 'super-man',
  isLoading: false,
  isEnd: false,
  error: {} as Error | AxiosError,
  newsData: [],
};
