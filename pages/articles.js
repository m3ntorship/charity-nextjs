import { ArticlesList } from "../components/NewsAndArticles";
import { Banner } from "../components/ArticleBanner";
import { VolunteeringBanner } from "../components/VolunteeringBanner";
import Layout from "../components/Layout";
import { charityAPI } from "../clients";
const articles = ({
  articlesListData,
  articlesPageData,
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
}) => {
  return (
    <>
      <Layout
        footerData={footerData}
        ContactsData={ContactsData}
        logoData={logoData}
        socialMediasData={socialMediasData}
        pagesData={pagesData}
      >
        <Banner data={articlesPageData} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 row-gap-8">
          <ArticlesList articles={articlesListData} />
        </div>
        <VolunteeringBanner data={articlesPageData} />
      </Layout>
    </>
  );
};

export function getServerSideProps() {
  return Promise.all([
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
    charityAPI("/footer"),
    charityAPI("/news-and-articles"),
  ]).then(
    ([
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
      { data: articlesListData },
    ]) => {
      const [articlesPageData] = pagesData.filter(
        (pageData) => pageData.name === "articles"
      );
      return {
        props: {
          ContactsData,
          logoData,
          socialMediasData,
          pagesData,
          footerData,
          articlesListData: articlesListData.home_articles,
          articlesPageData,
        },
      };
    }
  );
}
export default articles;
