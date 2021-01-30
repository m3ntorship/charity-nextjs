import CustomPage from '../../../components/CustomPage';
import { charityAPI } from '../../../clients';
import checkingDataError from '../../../Helpers/checkingDataError';
const Article = ({ customPage }) => {
  return (
    <>
      <div className="container py-28">
          <div>
            {!customPage.statusCode && <CustomPage data={customPage} />}
          </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params: { lng, id } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  const layoutEndPointsArr = [getCharityAPI(`/custom-pages?id=${id}`)];
  return Promise.all(checkingDataError(layoutEndPointsArr)).then(
    ([{ data: customPage }]) => {
      return {
        props: {
          customPage,
          lngDict,
          lng
        }
      };
    }
  );
}

export default Article;
