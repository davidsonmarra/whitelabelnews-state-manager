import {
  store as exportedStore,
  IRootState as exportedIRootState,
  FETCH_NEWS as exportedFETCH_NEWS,
} from '../src';
declare module 'whitelabelnews-state-manager' {
  export const store: typeof exportedStore;
  export type IRootState = exportedIRootState;
  export const FETCH_NEW: exportedFETCH_NEWS;
}
