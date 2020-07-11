import ArticleModel from '../../../components/ArticleModel';
import { ArticlesSearch } from '../../../components/ArticlesSearch';
import { RecentArticles } from '../../../components/RecentArticles';
import { Banner } from '../../../components/MainBanner';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { charityAPI } from '../../../clients';
import useI18n from '../../../hooks/use-i18n';
import Error from '../../_error';
import checkingDataError from '../../../Helpers/checkingDataError';
const Article = ({
  statusCode,
  recentArticlesData,
  articleData,
  articlesPageData,
  lngDict
}) => {
  if (statusCode === 404) return <Error />;

  const i18n = useI18n();
  const findArticle = `${i18n.t('articles.findArticle')}`;
  const recentArticlesTitle = `${i18n.t('articles.recentArticles')}`;

  if (articlesPageData.statusCode) {
    articlesPageData = false;
  } else {
    articlesPageData = articlesPageData[0];
  }
  if (articleData.statusCode) {
    articleData = false;
  } else {
    articleData = articleData[0];
  }
  return (
    <>
      {articlesPageData && <Banner data={articlesPageData} lngDict={lngDict} />}
      <div className="container py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
          <div className="col-span-12 lg:col-span-8">
            {articleData && <ArticleModel data={articleData} />}
          </div>
          <aside className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col">
            <div className="mb-8 sm:mr-8 lg:mr-0 sm:w-1/2 lg:w-full">
              <ArticlesSearch data={findArticle} />
            </div>
            <div className="sm:w-1/2 lg:w-full">
              {!recentArticlesData.statusCode && (
                <RecentArticles
                  data={recentArticlesData}
                  recentArticlesTitle={recentArticlesTitle}
                />
              )}
            </div>
          </aside>
        </div>
      </div>
      {articlesPageData && <SecondaryBanner data={articlesPageData} />}
    </>
  );
};

export async function getServerSideProps({ params: { lng, id } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  const layoutEndPointsArr = [
    getCharityAPI('/pages?id=5ef224bd6b82900017e7a7b3'),
    getCharityAPI(`articles?id=${id}`),
    getCharityAPI('articles?_sort=createdAt:DESC&_limit=3')
  ];
  return Promise.all(checkingDataError(layoutEndPointsArr)).then(
    ([
      { data: articlesPageData },
      { data: articleData },
      { data: recentArticlesData }
    ]) => {
      return {
        props: {
          articleData,
          articlesPageData,
          recentArticlesData,
          lngDict
        }
      };
    }
  );
}

export default Article;
