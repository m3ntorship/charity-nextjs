import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { Soon } from '../../../components/Soon';

const Volunteers = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  volunteersPageData
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <Soon />
    </Layout>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  return Promise.all([
    getCharityAPI('/main-contacts'),
    getCharityAPI('/logo'),
    getCharityAPI('/socialmedias'),
    getCharityAPI('/pages'),
    getCharityAPI('/footer')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData }
    ]) => {
      const [volunteersPageData] = pagesData.filter(
        pageData => pageData.name === 'volunteers'
      );
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          footerData,
          pagesData,
          volunteersPageData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Volunteers;
