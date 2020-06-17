import { HeaderCarousel } from "../components/HeaderCarousel";
import { Welcome } from "../components/Welcome";
import { Activities } from "../components/Activities";
import { FeaturedBanner } from "../components/FeaturedBanner";
import { Causes } from "../components/Causes";
import { Numbers } from "../components/Numbers";
// import { UpcomingEventsSection } from "../components/UpcomingEvents";
import { Testimonials } from "../components/Testimonials";
import { WorkStyle } from "../components/WorkStyle";
import { News } from "../components/NewsAndArticles";
import { Sponsers } from "../components/Sponsers";
import { MainContact } from "../components/MainContact";
import { charityAPI } from "../clients";
const Home = ({
  headerCarouselData,
  welcomeData,
  activitiesData,
  featuredBannerData,
  causesData,
  numbersData,
  // upcomingEventsData,
  testimonialsData,
  workStyleData,
  newsData,
  sponsersData,
  mainContactData,
}) => {
  return (
    <>
      <HeaderCarousel data={headerCarouselData} />
      <Welcome data={welcomeData} />
      <Activities data={activitiesData} />
      <FeaturedBanner data={featuredBannerData} />
      <Causes data={causesData} />
      <Numbers data={numbersData} />
      {/* <UpcomingEventsSection
        data={upcomingEventsData}
        cardData={upcomingEventsCardData}
      /> */}
      <Testimonials data={testimonialsData} />
      <WorkStyle data={workStyleData} />
      <News data={newsData} />
      <Sponsers data={sponsersData} />
      <MainContact data={mainContactData} />
    </>
  );
};
export function getServerSideProps() {
  return Promise.all([
    charityAPI("/main-carousels"),
    charityAPI("/welcome-section"),
    charityAPI("/what-we-do"),
    charityAPI("/featured-banner"),
    charityAPI("/popular-causes"),
    charityAPI("/speaking-numbers"),
    // charityAPI("/upcoming-events"),
    charityAPI("/what-they-say"),
    charityAPI("/how-we-work"),
    charityAPI("/news-and-articles"),
    charityAPI("/Sponsers"),
    charityAPI("/main-contacts"),
  ]).then(
    ([
      { data: headerCarouselData },
      { data: welcomeData },
      { data: activitiesData },
      { data: featuredBannerData },
      { data: causesData },
      { data: numbersData },
      // { data: upcomingEventsData },
      { data: testimonialsData },
      { data: workStyleData },
      { data: newsData },
      { data: sponsersData },
      { data: mainContactData },
    ]) => {
      return {
        props: {
          headerCarouselData,
          welcomeData,
          activitiesData,
          featuredBannerData,
          causesData,
          numbersData,
          // upcomingEventsData,
          testimonialsData,
          workStyleData,
          newsData,
          sponsersData,
          mainContactData,
        },
      };
    }
  );
}
export default Home;
