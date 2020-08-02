import { lazy } from 'react';

export const FEATURES: { [key: string]: string } = {
  Notification: './Notification',
  Test: './Test',
};

const FeatureCompList = Object.keys(FEATURES).map((key) => {
  return lazy(() => import(FEATURES[key]));
});

export default FeatureCompList;
