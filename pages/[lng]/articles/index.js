import { ArticlesList } from '../../../components/NewsAndArticles';
import { Banner } from '../../../components/MainBanner';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';

const Articles = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  articlesPageData,
  articlesData,
  pagesData,
  lng,
  lngDict,
  settings
}) => {
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
      articlesData={articlesData}
      settings={settings}
    >
      <Banner data={articlesPageData} lngDict={lngDict} />
      <div className="container py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 row-gap-8">
          <ArticlesList articles={articlesData} />
        </div>
      </div>
      <SecondaryBanner data={articlesPageData} />
    </Layout>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  return Promise.all([
    getCharityAPI('/main-contacts'),
    getCharityAPI('/logo'),
    getCharityAPI('/socialmedias'),
    getCharityAPI('/pages'),
    getCharityAPI('/footer'),
    getCharityAPI('/articles'),
    getCharityAPI('/site-settings')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
      { data: articlesData },
      { data: settings }
    ]) => {
      const [articlesPageData] = pagesData.filter(
        pageData => pageData.name === 'articles'
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
          settings
        }
      };
    }
  );
}

export default Articles;
