import createApiService from './service';
import constants from '../constants';
import type { AxiosRequestHeaders } from 'axios';
const api = createApiService(constants.BASE_URL, constants.TIMEOUT, {
  Authorization: API_KEY,
} as AxiosRequestHeaders);

export default api;
