import { charityAPI } from '../../../clients';
import checkingDataError from '../../../Helpers/checkingDataError';
import { Soon } from '../../../components/Soon';
const Cause = ({ settings }) => {
  return <Soon data={settings} />;
};
export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  const layoutEndPointsArr = [getCharityAPI('/site-settings')];
  return Promise.all(checkingDataError(layoutEndPointsArr)).then(
    ([{ data: settings }]) => {
      return {
        props: {
          settings,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Cause;
