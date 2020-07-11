import { charityAPI } from '../../../clients';
import { PersonCardsSection } from '../../../components/PersonCardsSection';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { Banner } from '../../../components/MainBanner';

const Volunteers = ({ volunteersPageData, volunteersData, lng, lngDict }) => {
  return (
    <>
      {!volunteersPageData.statusCode && (
        <Banner data={volunteersPageData[0]} lngDict={lngDict} />
      )}

      {/* <div className="container">
        <PersonCardsSection data={volunteersData} lng={lng} />
      </div> */}
      {/* <SecondaryBanner data={volunteersPageData} /> */}
    </>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);
  const volunteetsPageEndPtArr = [
    getCharityAPI('/pages?name=volunteers'),
    getCharityAPI('/volunteers')
  ];
  return Promise.all(
    volunteetsPageEndPtArr.map(endPoint =>
      endPoint
        .then(res => {
          if (Object.keys(res.data).length) {
            return res;
          } else {
            return {
              data: {
                statusCode: 404
              }
            };
          }
        })
        .catch(err => ({
          data: {
            statusCode: 404
          }
        }))
    )
  ).then(([{ data: volunteersPageData }, { data: volunteersData }]) => {
    return {
      props: {
        volunteersData,
        volunteersPageData,
        lng,
        lngDict
      }
    };
  });
}

export default Volunteers;
