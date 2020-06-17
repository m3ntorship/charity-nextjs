import Layout from "../components/Layout";
import { charityAPI } from "../clients";
const Home = ({
  articlesData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData
}) => {
  const homeArticles = articlesData.filter(
    ({ is_in_home }) => is_in_home === true
  )
  return (
    <>
      <Layout
        ContactsData={ContactsData}
        logoData={logoData}
        socialMediasData={socialMediasData}
        pagesData = {pagesData}
      >
        <h1 className="text-pink-700">This is the Home page</h1>
        <div className="flex justify-center text-center">
          {homeArticles.map(
            ({ title, description, thumbnail: { url: imgUrl }, id }) => {
              return (
                <article key={id}>
                  <img src={imgUrl} alt="" />
                  <h1>{title}</h1>
                  <p>{description}</p>
                </article>
              );
            }
          )}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  return Promise.all([
    charityAPI("/articles"),
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
  ]).then(
    ([
      { data: articlesData },
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
    ]) => {
      return {
        props: { articlesData, ContactsData, logoData,socialMediasData,pagesData },
      };
    }
  );
}

export default Home;
