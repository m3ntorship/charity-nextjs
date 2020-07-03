import React from 'react';
import { FeaturedBanner } from '../../components/FeaturedBanner';
import { withKnobs } from '@storybook/addon-knobs';
import { ar, en } from './data';
export default {
  title: 'Banners',
  component: FeaturedBanner,
  decorators: [withKnobs]
};

export const Primary = ({ lang }) => {
  const data = lang == 'ar' ? ar : en;
  return <FeaturedBanner data={data} />;
};
