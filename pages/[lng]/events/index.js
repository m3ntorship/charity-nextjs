import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { Soon } from '../../../components/Soon';
const Events = ({ settings }) => {
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
          settings,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Events;
