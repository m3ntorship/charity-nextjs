import { HeaderCarousel } from '../../components/HeaderCarousel';
import { Welcome } from '../../components/Welcome';
import { Activities } from '../../components/Activities';
import { FeaturedBanner } from '../../components/FeaturedBanner';
import { Causes } from '../../components/Causes';
import { Numbers } from '../../components/Numbers';
import { UpcomingEventsSection } from '../../components/UpcomingEvents';
import { Testimonials } from '../../components/Testimonials';
import { WorkStyle } from '../../components/WorkStyle';
import { News } from '../../components/NewsAndArticles';
import { Sponsers } from '../../components/Sponsers';
import { charityAPI } from '../../clients';

const Home = ({
  headerCarouselData,
  welcomeData,
  activitiesData,
  featuredBannerData,
  causesData,
  numbersData,
  upcomingEventsData,
  testimonialsData,
  workStyleData,
  newsData,
  sponsersData,
  homeArticles,
  homeCausesData,
  lng,
  lngDict
}) => {
  let featuredCauseData = data => {
    if (data) {
      let featuredCause = data.causes.find(cause => {
        return cause.is_featured;
      });
      return {
        featuredCause
      };
    } else {
      return {
        featuredCause: null
      };
    }
  };
  return (
    <>
      <HeaderCarousel data={headerCarouselData} />
      <Welcome data={welcomeData} />
      <Activities data={activitiesData} />
      <FeaturedBanner data={featuredBannerData} />
      <Causes
        data={causesData}
        homeCausesData={homeCausesData}
        lng={lng}
        lngDict={lngDict}
      />
      <Numbers data={numbersData} />
      <UpcomingEventsSection
        data={upcomingEventsData}
        cardData={featuredCauseData(causesData)}
        lng={lng}
        lngDict={lngDict}
      />
      <Testimonials data={testimonialsData} />
      <WorkStyle data={workStyleData} />
      <News data={{ newsData, homeArticles }} />
      <Sponsers data={sponsersData} />
    </>
  );
};
export async function getServerSideProps({ params: { lng } }) {
  if (lng !== 'ar' && lng !== 'en') return { props: {} };

  const { default: lngDict = {} } = await import(`../../locales/${lng}.json`);

  const getCharityAPI = charityAPI(lng);
  return Promise.all([
    getCharityAPI('/main-carousels'),
    getCharityAPI('/welcome-section'),
    getCharityAPI('/what-we-do'),
    getCharityAPI('/featured-banner'),
    getCharityAPI('/popular-causes'),
    getCharityAPI('/speaking-numbers'),
    getCharityAPI('/upcoming-events'),
    getCharityAPI('/what-they-say'),
    getCharityAPI('/how-we-work'),
    getCharityAPI('/news-and-articles'),
    getCharityAPI('/Sponsers'),
    getCharityAPI('/articles?_limit=3&is_in_home=true'),
    getCharityAPI('/causes?is_home=true')
  ]).then(
    ([
      { data: headerCarouselData },
      { data: welcomeData },
      { data: activitiesData },
      { data: featuredBannerData },
      { data: causesData },
      { data: numbersData },
      { data: upcomingEventsData },
      { data: testimonialsData },
      { data: workStyleData },
      { data: newsData },
      { data: sponsersData },
      { data: homeArticles },
      { data: homeCausesData }
    ]) => {
      return {
        props: {
          headerCarouselData,
          welcomeData,
          activitiesData,
          featuredBannerData,
          causesData,
          numbersData,
          upcomingEventsData,
          testimonialsData,
          workStyleData,
          newsData,
          sponsersData,
          homeArticles,
          homeCausesData,
          lngDict,
          lng
        }
      };
    }
  );
}
export default Home;
