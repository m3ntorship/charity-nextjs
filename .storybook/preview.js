import React from 'react';
import { select } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import I18n from '../lib/i18n';
import langDictAr from '../locales/ar.json';
import langDictEn from '../locales/en.json';
import '../styles/index.css';

addDecorator(storyFn => {
  const lng = select(
    'Language',
    {
      English: 'en',
      Arabic: 'ar'
    },
    'en'
  );
  const lngDict = lng == 'ar' ? langDictAr : langDictEn;
  const dir = lng == 'ar' ? 'rtl' : 'ltr';
  return (
    <I18n lngDict={lngDict} locale={lng}>
      <div dir={dir} className={`font-${lng}`}>
        {storyFn({ lng,lngDict })}
      </div>
    </I18n>
  );
});
