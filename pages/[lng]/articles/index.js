import { ArticlesList } from "../../../components/NewsAndArticles";
import { Banner } from "../../../components/ArticleBanner";
import { VolunteeringBanner } from "../../../components/VolunteeringBanner";
import Layout from "../../../components/Layout";
import { charityAPI } from "../../../clients";

const Articles = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  articlesPageData,
  articlesData,
  pagesData,
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
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

export async function getServerSideProps({ params: { lng } }) {
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
    getCharityAPI("/articles"),
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
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          articlesPageData,
          footerData,
          articlesData,
          pagesData,
          lng,
          lngDict,
        },
      };
    }
  );
}

export default Articles;
