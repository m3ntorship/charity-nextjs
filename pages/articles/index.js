import { ArticlesList } from "../../components/NewsAndArticles";
import { Banner } from "../../components/ArticleBanner";
import { VolunteeringBanner } from "../../components/VolunteeringBanner";
import Layout from "../../components/Layout";
import { charityAPI } from "../../clients";

const Articles = ({
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  articlesPageData,
  articlesData,
  pagesData,
}) => {
  return (
    <Layout
      footerData={footerData}
      ContactsData={ContactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
      articlesData={articlesData}
    >
      <Banner data={articlesPageData} />
      <div className="container py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 row-gap-8">
          <ArticlesList articles={articlesData} />
        </div>
      </div>
      <VolunteeringBanner data={articlesPageData} />
    </Layout>
  );
};

export function getServerSideProps() {
  return Promise.all([
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
    charityAPI("/main-contacts"),
    charityAPI("/footer"),
    charityAPI("/articles"),
  ]).then(
    ([
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: mainContactData },
      { data: footerData },
      { data: articlesData },
    ]) => {
      const [articlesPageData] = pagesData.filter(
        (pageData) => pageData.name === "articles"
      );
      return {
        props: {
          ContactsData,
          logoData,
          socialMediasData,
          articlesPageData,
          mainContactData,
          footerData,
          articlesData,
          pagesData,
        },
      };
    }
  );
}

export default Articles;
