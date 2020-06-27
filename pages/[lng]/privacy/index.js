import Layout from "../../../components/Layout";
import { charityAPI } from "../../../clients";

const Faq = ({
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={ContactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      Privacy policy page
    </Layout>
  );
};

export  async function getServerSideProps({params:{lng}}) {
  const { default: lngDict = {} } = await import(`../../../locales/${lng}.json`);
  const getCharityAPI = charityAPI(lng);

  return Promise.all([
    getCharityAPI("/main-contacts"),
    getCharityAPI("/logo"),
    getCharityAPI("/socialmedias"),
    getCharityAPI("/pages"),
    getCharityAPI("/footer"),
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
          lng,
          lngDict
        },
      };
    }
  );
}

export default Faq;
