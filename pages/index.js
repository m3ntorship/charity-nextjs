import Layout from "../components/Layout";
import { charityAPI } from "../clients";
const Home = ({ articlesData }) => {
  const homeArticles = articlesData.filter(
    ({ is_in_home }) => is_in_home === true
  );
  return (
    <>
      <Layout>
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
  return Promise.all([charityAPI("/articles")]).then(
    ([{ data: articlesData }]) => {
      return {
        props: { articlesData },
      };
    }
  );
}

export default Home;
