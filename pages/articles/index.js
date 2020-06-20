import Layout from "../../components/Layout";
import {News} from '../../components/NewsAndArticles'
import { charityAPI } from "../../clients";

const Articles = ({
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
  newsData,
}) => {
  return (
    <Layout
      footerData={footerData}
      ContactsData={ContactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <News data={newsData} />
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
    charityAPI("/news-and-articles"),
  ]).then(
    ([
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: mainContactData },
      { data: footerData },
      { data: newsData },
    ]) => {
      return {
        props: {
          ContactsData,
          logoData,
          socialMediasData,
          pagesData,
          mainContactData,
          footerData,
          newsData,
        },
      };
    }
  );
}

export default Articles;
