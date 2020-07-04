import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { Soon } from '../../../components/Soon';
const Events = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  settings
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <Soon data={settings} />
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
    getCharityAPI('/footer'),
    getCharityAPI('/site-settings')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
      { data: settings }
    ]) => {
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          footerData,
          settings,
          pagesData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Events;
