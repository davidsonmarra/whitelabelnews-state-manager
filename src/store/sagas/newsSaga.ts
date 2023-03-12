// import { AxiosError } from 'axios';
import { all, takeLatest } from 'redux-saga/effects';
// import api from '../../services/api';
import {
  FETCH_NEWS,
  // FETCH_NEWS_SUCCESS,
  // FETCH_NEWS_ERROR,
} from '../slices/newsSlice';

export function* fetchNews({}: ReturnType<typeof FETCH_NEWS>) {
  // const searchQuery = `/books?page=${offset}&amount=15&category=${category.key}&title=${search}`;
  // try {
  //   const { data } = yield call(api.get, searchQuery);
  //   yield put(FETCH_BOOKS_SUCCESS(data?.data));
  // } catch (error) {
  //   if (error instanceof AxiosError || error instanceof Error)
  //     yield put(FETCH_BOOKS_ERROR(error));
  // }
}

export default function* watcher() {
  yield all([takeLatest(FETCH_NEWS, fetchNews)]);
}
