import Layout from "../../../components/Layout";
import { charityAPI } from "../../../clients";

const Faq = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      Site map
    </Layout>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  return Promise.all([
    getCharityAPI("/main-contacts"),
    getCharityAPI("/logo"),
    getCharityAPI("/socialmedias"),
    getCharityAPI("/pages"),
    getCharityAPI("/footer"),
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
    ]) => {
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          footerData,
          pagesData,
          lng,
          lngDict,
        },
      };
    }
  );
}

export default Faq;
