import { charityAPI } from '../../../clients';
import { PersonCardsSection } from '../../../components/PersonCardsSection';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { Banner } from '../../../components/MainBanner';
import checkingDataError from '../../../Helpers/checkingDataError';

const devTeam = ({ devTeamPageData, devTeamMembersData, lng, lngDict }) => {
  if (devTeamPageData.statusCode) {
    devTeamPageData = false;
  } else {
    devTeamPageData = devTeamPageData[0];
  }
  return (
    <>
      {devTeamPageData && <Banner data={devTeamPageData} lngDict={lngDict} />}
      <div className="container">
        {!devTeamMembersData.statusCode && (
          <PersonCardsSection data={devTeamMembersData} lng={lng} />
        )}
      </div>
      {devTeamPageData && <SecondaryBanner data={devTeamPageData} />}
    </>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  const layoutEndPointsArr = [
    getCharityAPI('/pages?id=5efc87637faf900017be6dd9'),
    getCharityAPI('/dev-team-members?_sort=priority:ASC')
  ];
  return Promise.all(checkingDataError(layoutEndPointsArr)).then(
    ([{ data: devTeamPageData }, { data: devTeamMembersData }]) => {
      console.log(devTeamPageData);
      return {
        props: {
          devTeamMembersData,
          devTeamPageData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default devTeam;
