import React from 'react';
import useI18n from '../../hooks/use-i18n';
import { useRouter } from 'next/router';
import Link from 'next/link';
const LanguageSwitcher = () => {
  const router = useRouter();
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  const { asPath } = router;
  let pageName = asPath.substring(3);
  return (
    <>
      {currentLocale === 'ar' ? (
        <a href="" onClick={() => router.push(`/en${pageName}`)}>
          <img
            className="w-8 h-6"
            src="../../static/flag-icons/uk-en.png"
            alt=""
            title={`change to English `}
          />
        </a>
      ) : (
        <a href="" onClick={() => router.push(`/ar${pageName}`)}>
          <img
            className="w-8 h-6"
            src="../../static/flag-icons/eg-ar.png"
            alt=""
            title="التحويل للغة العربية"
          />
        </a>
      )}
    </>
  );
};

export default LanguageSwitcher;
