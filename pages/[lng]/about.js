import Layout from "../../components/Layout";
import { charityAPI } from "../../clients";
import Head from "next/head";
import useI18n from "../../hooks/use-i18n";
import { contentLanguageMap } from "../../lib/i18n";

const About = ({
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
}) => {
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <Layout
      footerData={footerData}
      contactsData={ContactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <Head>
        <meta
          httpEquiv="content-language"
          content={contentLanguageMap[currentLocale]}
        />
      </Head>
      <div>About components goes here</div>
    </Layout>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(`../../locales/${lng}.json`);
  return Promise.all([
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
    charityAPI("/footer"),
  ]).then(
    ([
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
    ]) => {
      return {
        props: {
          ContactsData,
          logoData,
          socialMediasData,
          footerData,
          pagesData,
          lngDict,
          lng
        },
      };
    }
  );
}

export default About;
