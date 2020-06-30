import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';

const Article = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <div> Event place holder </div>
    </Layout>
  );
};

export async function getServerSideProps({ params: { lng, id } }) {
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
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          pagesData,
          footerData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Article;
