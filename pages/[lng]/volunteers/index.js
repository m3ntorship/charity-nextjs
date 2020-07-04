import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { PersonCardsSection } from '../../../components/PersonCardsSection';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { Banner } from '../../../components/MainBanner';

const Volunteers = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  volunteersPageData,
  volunteersData,
  lng,
  lngDict
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <Banner data={volunteersData} lngDict={lngDict} />
      <div className="container">
        <PersonCardsSection data={volunteersData} lng={lng} />
      </div>
      <SecondaryBanner data={volunteersPageData} />
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
    getCharityAPI('/volunteers'),
    getCharityAPI('/footer')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: volunteersData },
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
          volunteersData,
          volunteersPageData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Volunteers;
