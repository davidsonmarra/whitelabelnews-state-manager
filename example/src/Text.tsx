import React from 'react';
import { FETCH_NEWS, IRootState } from '@whitelabelnews/state-manager';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function TextBrand() {
  const dispatch = useDispatch();
  const { newsData } = useSelector(({ news }: IRootState) => news);

  React.useEffect(() => {
    dispatch(FETCH_NEWS({}));
  }, [dispatch]);

  React.useEffect(() => {
    console.log('newsData: ', newsData[0]);
  }, [newsData]);

  return <Text>Result: {BRAND}</Text>;
}
