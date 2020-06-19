import { ArticlePageContent } from "../components/ArticlePageContent";
import { Banner } from "../components/ArticleBanner";
import { VolunteeringBanner } from "../components/VolunteeringBanner";
import { charityAPI } from "../clients";
const article = ({ articlesPageData, articlePageContentData }) => {
  return (
    <>
      <Banner data={articlesPageData} />
      <ArticlePageContent data={articlePageContentData} />
      <VolunteeringBanner data={articlesPageData} />
    </>
  );
};

export function getServerSideProps() {
  return Promise.all([
    charityAPI("/pages?published=true"),
    charityAPI("/news-and-articles"),
  ]).then(([{ data: pagesData }, { data: articlesData }]) => {
    const [articlesPageData] = pagesData.filter(
      (pageData) => pageData.name === "articles"
    );
    return {
      props: {
        articlesPageData,
        articlePageContentData: {
          articleSearchData: {
            title: "Find Article",
          },
          articles: articlesData,
        },
        
      },
    };
  });
}
