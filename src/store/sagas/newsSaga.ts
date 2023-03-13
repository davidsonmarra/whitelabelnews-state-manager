import { AxiosError } from 'axios';
import { all, select, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services';
import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
} from '../slices/newsSlice';
import type { IRootState } from '../store';

export function* fetchNews({}: ReturnType<typeof FETCH_NEWS>) {
  const {
    news: { search },
  }: IRootState = yield select();
  const searchQuery = `/everything?q=${search}&pageSize=15`;
  try {
    const { data } = yield call(api.get, searchQuery);
    yield put(FETCH_NEWS_SUCCESS(data?.articles));
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      yield put(FETCH_NEWS_ERROR(error));
  }
}

export default function* watcher() {
  yield all([takeLatest(FETCH_NEWS, fetchNews)]);
}
