import Layout from '../../../components/Layout';
import { charityAPI } from '../../../clients';
import { VolunteersSection } from '../../../components/VolunteersSection';
import { VolunteeringBanner } from '../../../components/VolunteeringBanner';

const Volunteers = ({
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
  volunteersPageData
}) => {
  const volunteersData = [
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    },
    {
      icon_links: [
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' },
        { icon_url: 'https://www.instgram.com', icon_font: 'instagram-square' }
      ],
      name: 'Mohamed Altramsi',
      role: 'Volunteer'
    }
  ];
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <div className="container">
        <VolunteersSection data={volunteersData} />
      </div>
      <VolunteeringBanner data={volunteersPageData} />
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
    getCharityAPI('/footer')
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData }
    ]) => {
      const [volunteersPageData] = pagesData.filter(
        pageData => pageData.name === 'volunteers'
      );
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          footerData,
          pagesData,
          volunteersPageData,
          lng,
          lngDict
        }
      };
    }
  );
}

export default Volunteers;
