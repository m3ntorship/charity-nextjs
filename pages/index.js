import Layout from "../components/Layout";
import HeaderCarousel from "../components/HeaderCarousel";
import { charityAPI } from "../clients";
const Home = ({
  articlesData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
  mainCarouselsData,
}) => {
  const homeArticles = articlesData.filter(
    ({ is_in_home }) => is_in_home === true
  );
  return (
    <>
      <Layout
        ContactsData={ContactsData}
        logoData={logoData}
        socialMediasData={socialMediasData}
        pagesData={pagesData}
      >
      <HeaderCarousel mainCarouselsData = {mainCarouselsData}  />
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
    charityAPI("/main-carousels"),
  ]).then(
    ([
      { data: articlesData },
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: mainCarouselsData },
    ]) => {
      return {
        props: {
          articlesData,
          ContactsData,
          logoData,
          socialMediasData,
          pagesData,
          mainCarouselsData,
        },
      };
    }
  );
}

export default Home;
