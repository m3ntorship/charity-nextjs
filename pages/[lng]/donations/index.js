import { Soon } from '../../../components/Soon';
import { charityAPI } from '../../../clients';

const Donations = ({ settings }) => {
  return <Soon data={settings} />;
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  return Promise.all([getCharityAPI('/site-settings')]).then(
    ([{ data: settings }]) => {
      return {
        props: {
          lng,
          lngDict,
          settings
        }
      };
    }
  );
}

export default Donations;
