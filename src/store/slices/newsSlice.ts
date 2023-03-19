import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type { IFetchNews, InitialStateNewsProps, NewsDTO } from 'types';

const getInitialStateByBrand = () => ({
  DailyBugle: require('./DailyBugleInitialStateNews')
    .initialState as InitialStateNewsProps,
  DailyPlanet: require('./DailyPlanetInitialStateNews')
    .initialState as InitialStateNewsProps,
});
const initialState = getInitialStateByBrand()[BRAND];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    FETCH_NEWS: (state, { payload }: PayloadAction<IFetchNews>) => ({
      ...state,
      isLoading: true,
      isEnd: false,
      search: payload.search || state.search,
      error: {} as Error | AxiosError,
    }),
    FETCH_NEWS_SUCCESS: (state, { payload }: PayloadAction<NewsDTO[]>) => ({
      ...state,
      isEnd: payload?.length < 15,
      isLoading: false,
      error: {} as Error | AxiosError,
      newsData: state.newsData.concat(payload),
    }),
    FETCH_NEWS_ERROR: (
      state,
      { payload }: PayloadAction<Error | AxiosError>
    ) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    RESET_NEWS: (state) => ({
      ...state,
      isLoading: false,
      isEnd: false,
      error: {} as Error | AxiosError,
      newsData: [],
    }),
  },
});

const { actions, reducer } = newsSlice;

export const { FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, RESET_NEWS } =
  actions;
export default reducer;
