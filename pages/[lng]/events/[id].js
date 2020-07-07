import { charityAPI } from '../../../clients';

const Article = () => {
  return <div> Event place holder </div>;
};

export async function getServerSideProps({ params: { lng, id } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  return {
    props: {
      lng,
      lngDict
    }
  };
}

export default Article;
