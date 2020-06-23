import Layout from "../../components/Layout";
import { charityAPI } from "../../clients";

const Donations = ({
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
      Donations components goes here
    </Layout>
  );
};

export  async function getServerSideProps({params:{lng}}) {
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
          lng,
          lngDict
        },
      };
    }
  );
}

export default Donations;
