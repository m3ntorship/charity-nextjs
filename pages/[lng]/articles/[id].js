import ArticleModel from "../../../components/ArticleModel";
import { ArticlesSearch } from "../../../components/ArticlesSearch";
import { RecentArticles } from "../../../components/RecentArticles";
import { Banner } from "../../../components/ArticleBanner";
import { VolunteeringBanner } from "../../../components/VolunteeringBanner";
import Layout from "../../../components/Layout";
import { charityAPI } from "../../../clients";

const Article = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  recentArticlesData,
  articleData,
  articlesPageData,
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <Banner data={articlesPageData} />
      <div className="container py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
          <div className="col-span-12 lg:col-span-8">
            <ArticleModel data={articleData} />
          </div>
          <aside className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col">
            <div className="mb-8 sm:mr-8 lg:mr-0 sm:w-1/2 lg:w-full">
              <ArticlesSearch data={{ title: "Find Article" }} />
            </div>
            <div className="sm:w-1/2 lg:w-full">
              <RecentArticles data={recentArticlesData} />
            </div>
          </aside>
        </div>
      </div>
      <VolunteeringBanner data={articlesPageData} />
    </Layout>
  );
};

export async function getServerSideProps({ params: { lng, id } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  return Promise.all([
    getCharityAPI("/main-contacts"),
    getCharityAPI("/logo"),
    getCharityAPI("/socialmedias"),
    getCharityAPI("/pages"),
    getCharityAPI("/footer"),
    getCharityAPI("/articles?_sort=createdAt:DESC"),
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
      { data: articlesData },
    ]) => {
      const [articlesPageData] = pagesData.filter(
        (pageData) => pageData.name === "articles"
      );
      const articleData = articlesData.find((article) => article.id === id);
      const recentArticlesData = articlesData.slice(0, 3);
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          pagesData,
          footerData,
          articleData,
          articlesPageData,
          recentArticlesData,
          lng,
          lngDict,
        },
      };
    }
  );
}

export default Article;
