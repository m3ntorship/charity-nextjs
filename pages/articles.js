import { ArticlesList } from "../components/NewsAndArticles";
import { Banner } from "../components/ArticleBanner";
import { VolunteeringBanner } from "../components/VolunteeringBanner";
import { charityAPI } from "../clients";
const articles = ({ articlesListData, articlesPageData }) => {
  return (
    <>
      <Banner data={articlesPageData} />
      <ArticlesList articles={articlesListData} />
      <VolunteeringBanner data={articlesPageData} />
    </>
  );
};

export function getServerSideProps() {
  return Promise.all([
    charityAPI("/pages?published=true"),
    charityAPI("/news-and-articles"),
  ]).then(([{ data: pagesData }, { data: articlesListData }]) => {
    const [articlesPageData] = pagesData.filter(
      (pageData) => pageData.name === "articles"
    );
    return {
      props: {
        articlesListData: articlesListData.home_articles,
        articlesPageData,
      },
    };
  });
}
export default articles;
