import React from 'react';
import '../styles/index.css';
import { boolean, select } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import I18n from '../lib/i18n';
import langDictAr from '../locales/ar.json';
import langDictEn from '../locales/en.json';

addDecorator(storyFn => {
  const lang = select(
    'Language',
    {
      English: 'en',
      Arabic: 'ar'
    },
    'en'
  );
  const langDict = lang == 'ar' ? langDictAr : langDictEn;
  const dir = lang == 'ar' ? 'rtl' : 'ltr';
  return (
    <I18n lngDict={langDict} locale={lang}>
      <div dir={dir} className={`font-${lang}`}>
        {storyFn({ lang })}
      </div>
    </I18n>
  );
});
