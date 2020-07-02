import React from 'react';
import { FeaturedCause } from '../../components/FeaturedCause';
import { Cause } from '../../components/Causes';
import { withKnobs } from '@storybook/addon-knobs';
import { ar as normal_ar, en as normal_en } from './data_normal';
import { ar, en } from './data_featured';
export default {
  title: 'Causes',
  component: FeaturedCause,
  decorators: [withKnobs]
};

export const Featured = ({ lang }) => {
  const data = lang == 'ar' ? ar : en;
  return <FeaturedCause data={{ featuredCause: data }} />;
};

export const Normal = ({ lang }) => {
  const data = lang == 'ar' ? normal_ar : normal_en;
  return <Cause {...data} />;
};
