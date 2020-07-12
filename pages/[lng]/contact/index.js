import { charityAPI } from '../../../clients';
import { Soon } from '../../../components/Soon';
const Contact = ({ settings }) => {
  return <Soon data={settings} />;
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  return Promise.all([
    getCharityAPI('/site-settings')
      .then(res => {
        if (Object.keys(res.data).length) {
          return res;
        } else {
          return {
            data: {
              statusCode: 404
            }
          };
        }
      })
      .catch(err => ({
        data: {
          statusCode: 404
        }
      }))
  ]).then(([{ data: settings }]) => {
    return {
      props: {
        settings,
        lng,
        lngDict
      }
    };
  });
}

export default Contact;
