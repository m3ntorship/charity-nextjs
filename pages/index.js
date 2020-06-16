import Layout from "../components/Layout";
import fetch from "node-fetch";

const Home = ({ data }) => {
  const homeArticles = data.filter(({ is_in_home }) => is_in_home === true);
  return (
    <>
      <Layout>
        <h1 className="text-pink-700">This is the Home page</h1>
        <div className="flex justify-center text-center">
          {homeArticles.map(
            ({ title, description, thumbnail: { url: imgUrl },id }) => {
              return (
                <article key = {id}>
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
  const res = await fetch("http://localhost:1337/articles");
  const jsonData = await res.json();

  return {
    props: {
      data: jsonData,
    },
  };
}

export default Home;
