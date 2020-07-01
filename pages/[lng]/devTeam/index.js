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
  devTeamPageData,
  devTeamMembersData,
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
      <Banner data={devTeamPageData} lngDict={lngDict} />
      <div className="container">
        <PersonCardsSection data={devTeamMembersData} lng={lng} />
      </div>
      <SecondaryBanner data={devTeamPageData} />
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
    getCharityAPI('/dev-team-members'),
    getCharityAPI('/footer')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: devTeamMembersData },
      { data: footerData }
    ]) => {
      const [devTeamPageData] = pagesData.filter(
        pageData => pageData.name === 'Dev Team'
      );
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          footerData,
          pagesData,
          devTeamMembersData,
          devTeamPageData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Volunteers;
