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
  testimonials,
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
      {!headerCarouselData.statusCode && (
        <HeaderCarousel data={headerCarouselData} />
      )}
      {!welcomeData.statusCode && <Welcome data={welcomeData} />}

      {!activitiesData.statusCode && <Activities data={activitiesData} />}
      {!featuredBannerData.statusCode && (
        <FeaturedBanner data={featuredBannerData} />
      )}
      {!causesData.statusCode &&
        !homeCausesData.statusCode &&
        lng &&
        lngDict && (
          <Causes
            data={causesData}
            homeCausesData={homeCausesData}
            lng={lng}
            lngDict={lngDict}
          />
        )}
      {!numbersData.statusCode && <Numbers data={numbersData} />}

      {!upcomingEventsData.statusCode &&
        !causesData.statusCode &&
        lng &&
        lngDict && (
          <UpcomingEventsSection
            data={upcomingEventsData}
            cardData={featuredCauseData(causesData)}
            lng={lng}
            lngDict={lngDict}
          />
        )}
      {!testimonialsData.statusCode && !testimonials.statusCode && (
        <Testimonials data={{ testimonialsData, testimonials }} />
      )}

      {!workStyleData.statusCode && <WorkStyle data={workStyleData} />}
      {!newsData.statusCode && !homeArticles.statusCode && (
        <News data={{ newsData, homeArticles }} />
      )}

      {!sponsersData.statusCode && <Sponsers data={sponsersData} />}
    </>
  );
};
export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(`../../locales/${lng}.json`);
  const getCharityAPI = charityAPI(lng);
  const mainEndPointsArr = [
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
    getCharityAPI('/causes?is_home=true'),
    getCharityAPI('/testimonials?isShown=true')
  ];
  return Promise.all(
    mainEndPointsArr.map(endPoint =>
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
  ).then(
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
      { data: homeCausesData },
      { data: testimonials }
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
          testimonials,
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
