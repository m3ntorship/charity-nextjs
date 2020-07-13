import { ArticlesList } from '../../../components/NewsAndArticles';
import { Banner } from '../../../components/MainBanner';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { charityAPI } from '../../../clients';
import checkingDataError from '../../../Helpers/checkingDataError';

const Articles = ({
  articlesPageData,
  articlesData,

  lngDict
}) => {
  if (articlesPageData.statusCode) {
    articlesPageData = false;
  } else {
    articlesPageData = articlesPageData[0];
  }

  return (
    <>
      {articlesPageData && <Banner data={articlesPageData} lngDict={lngDict} />}
      <div className="container py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 row-gap-8">
          {!articlesData.statusCode && <ArticlesList articles={articlesData} />}
        </div>
      </div>
      {articlesPageData && <SecondaryBanner data={articlesPageData} />}
    </>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  const layoutEndPointsArr = [
    getCharityAPI('/pages?name=articles'),
    getCharityAPI('/articles')
  ];
  return Promise.all(checkingDataError(layoutEndPointsArr)).then(
    ([{ data: articlesPageData }, { data: articlesData }]) => {
      return {
        props: {
          articlesPageData,
          articlesData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Articles;
