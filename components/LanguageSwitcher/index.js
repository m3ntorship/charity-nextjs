import React from "react";
import Link from "next/link";
import useI18n from "../../hooks/use-i18n";
import { useRouter } from "next/router";
const LanguageSwitcher = () => {
  const router = useRouter();
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  const { asPath } = router;
  let pageName = asPath.substring(3);
  return (
    <>
        {currentLocale === "ar" ? (
          <li className="inline-block language_elector">
            <Link href={`/en${pageName}`}>
              <a>
                <img
                  className="w-8 h-6"
                  src="../../static/flag-icons/uk-en.png"
                  alt=""
                  title = {`change to English `}
                />
              </a>
            </Link>
          </li>
        ) : (
          <Link href={`/ar${pageName}`}>
            <a>
              <img
                className="w-8 h-6"
                src="../../static/flag-icons/eg-ar.png"
                alt=""
                title = "التحويل للغة العربية"
              />
            </a>
          </Link>
        )}
    </>
  );
};

export default LanguageSwitcher;
