import { charityAPI } from '../../../clients';
import { Soon } from '../../../components/Soon';
const Article = ({ settings }) => {
  return <Soon />;
};

export async function getServerSideProps({ params: { lng, id } }) {
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

export default Article;
