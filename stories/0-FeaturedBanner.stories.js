import React from 'react';
import { FeaturedBanner } from '../components/FeaturedBanner';
import I18n from '../lib/i18n';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'FeaturedBanner',
  component: FeaturedBanner,
  decorators: [withKnobs]
};

export const English = () => {
  const data = {
    text_primary: text(
      'data',
      'Making someone else’s dreams a reality is something that’s value is'
    ),
    text_complementary: 'innumerable',
    button_text: 'Start Donation',
    button_url: '/nile',
    image_top: {
      url:
        'https://s3.m3ntorship.net/charity-cms-dev/donation-banner-icon_37be254b77_7b2a8696a1.png'
    },
    image_background: {
      url:
        'https://s3.m3ntorship.net/charity-cms-dev/donation-banner-bg_15d2c4c3bf.jpeg'
    }
  };

  return (
    <I18n
      lngDict={{}}
      locale="en"
    >
      <div dir="ltr" className="font-en">
        <FeaturedBanner data={data} />
      </div>
    </I18n>
  );
};
