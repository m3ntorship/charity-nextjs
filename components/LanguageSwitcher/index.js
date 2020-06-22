import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
const LanguageSwitcher = () => {
  const router = useRouter();
  const {asPath} = router
  let pageName = asPath.substring(3)
  return (
    <>
      <li className ="inline-block" >
        <Link href={`/ar${pageName}`}>
          <a>
            اللغة العربية
          </a>
        </Link>
      </li>
      <li  className ="inline-block">
        <Link href={`/en${pageName}`}>
          English
        </Link>
      </li>
    </>
  );
};

export default LanguageSwitcher;
