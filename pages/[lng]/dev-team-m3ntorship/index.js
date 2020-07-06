import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { PersonCardsSection } from '../../../components/PersonCardsSection';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { Banner } from '../../../components/MainBanner';

const devTeam = ({ devTeamPageData, devTeamMembersData, lng, lngDict }) => {
  return (
    <>
      <Banner data={devTeamPageData} lngDict={lngDict} />
      <div className="container">
        <PersonCardsSection data={devTeamMembersData} lng={lng} />
      </div>
      <SecondaryBanner data={devTeamPageData} />
    </>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  return Promise.all([
    getCharityAPI('/pages'),
    getCharityAPI('/dev-team-members?_sort=priority:ASC')
  ]).then(([{ data: pagesData }, { data: devTeamMembersData }]) => {
    const [devTeamPageData] = pagesData.filter(
      pageData => pageData.name === 'Dev Team'
    );
    return {
      props: {
        devTeamMembersData,
        devTeamPageData,
        lng,
        lngDict
      }
    };
  });
}

export default devTeam;
