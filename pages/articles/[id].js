import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { charityAPI } from "../../clients";

const Article = ({
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
  articleData
}) => {
  const router = useRouter();
  console.log(articleData[0])
  return (
    <Layout
      footerData={footerData}
      ContactsData={ContactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <div>{articleData[0].id}</div>
    </Layout>
  );
};

export async function getServerSideProps({params :{id}}) {

  return Promise.all([
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
    charityAPI("/main-contacts"),
    charityAPI("/footer"),
    charityAPI(`/articles?id=${id}`)
  ]).then(
    ([
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: mainContactData },
      { data: footerData },
      { data: articleData },
    ]) => {

      return {
        props: {
          ContactsData,
          logoData,
          socialMediasData,
          pagesData,
          mainContactData,
          footerData,
          articleData
        },
      };
    }
  );
}

export default Article;
