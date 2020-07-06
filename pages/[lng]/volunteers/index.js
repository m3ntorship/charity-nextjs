import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { PersonCardsSection } from '../../../components/PersonCardsSection';
import { SecondaryBanner } from '../../../components/SecondaryBanner';
import { Banner } from '../../../components/MainBanner';

const Volunteers = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  volunteersPageData,
  volunteersData,
  lng,
  lngDict,
  settings
}) => {
  return (
 <>
      <Banner data={volunteersPageData} lngDict={lngDict} />
      <div className="container">
        <PersonCardsSection data={volunteersData} lng={lng} />
      </div>
      <SecondaryBanner data={volunteersPageData} />

      </>
  );
};

export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );
  const getCharityAPI = charityAPI(lng);

  return Promise.all([
    
    getCharityAPI('/pages'),
    getCharityAPI('/volunteers'),
    
  ]).then(
    ([
     
      { data: pagesData },
      { data: volunteersData },
      
    ]) => {
      const [volunteersPageData] = pagesData.filter(
        pageData => pageData.name === 'volunteers'
      );
      return {
        props: {
          
          volunteersData,
          volunteersPageData,
          lng,
          lngDict,
        }
      };
    }
  );
}

export default Volunteers;
