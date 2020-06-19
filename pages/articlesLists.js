import { ArticlesList } from "../components/NewsAndArticles";
import { charityAPI } from "../clients";
const articlesList = ({ articlesListData }) => {
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
  ]).then(([{ data: newsData }]) => {
    return {
      props: {
        articlesListData,
      },
    };
  });
}
export default articlesList;
