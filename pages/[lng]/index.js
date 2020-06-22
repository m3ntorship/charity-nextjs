import { HeaderCarousel } from "../../components/HeaderCarousel";
import { Welcome } from "../../components/Welcome";
import { Activities } from "../../components/Activities";
import { FeaturedBanner } from "../../components/FeaturedBanner";
import { Causes } from "../../components/Causes";
import { Numbers } from "../../components/Numbers";
import { UpcomingEventsSection } from "../../components/UpcomingEvents";
import { Testimonials } from "../../components/Testimonials";
import { WorkStyle } from "../../components/WorkStyle";
import { News } from "../../components/NewsAndArticles";
import { Sponsers } from "../../components/Sponsers";
import { ContactInfo } from "../../components/ContactInfo";
import { charityAPI } from "../../clients";
import Layout from "../../components/Layout";
import Head from "next/head";
import useI18n from "../../hooks/use-i18n";
import { contentLanguageMap } from "../../lib/i18n";
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
  footerData,
  contactsData,
  logoData,
  socialMediasData,
  pagesData,
}) => {
  let featuredCauseData = (data) => {
    if (data) {
      let featuredCause = data.causes.find((cause) => {
        return cause.is_featured;
      });
      return {
        featuredCause,
      };
    } else {
      return {
        featuredCause: null,
      };
    }
  };
  const i18n = useI18n();
  const currentLocale = i18n.activeLocale;
  return (
    <Layout
      footerData={footerData}
      contactsData={contactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      <Head>
        <meta
          httpEquiv="content-language"
          content={contentLanguageMap[currentLocale]}
        />
      </Head>
      <HeaderCarousel data={headerCarouselData} />
      <div className="flex p-10">
        <div>
          <h2>{i18n.t("intro.text")}</h2>
          <h3>{i18n.t("intro.description")}</h3>
          <div>Current locale: {i18n.activeLocale}</div>
        </div>
        <div className="flex">
          <a className="donation-banner__btn btn bg-c300 block" href="/de">
            Dutsh
          </a>
          <a className="donation-banner__btn btn bg-c300 block" href="/en">
            English
          </a>
        </div>
      </div>
      <Welcome data={welcomeData} />
      <Activities data={activitiesData} />
      <FeaturedBanner data={featuredBannerData} />
      <Causes data={causesData} />
      <Numbers data={numbersData} />
      <UpcomingEventsSection
        data={upcomingEventsData}
        cardData={featuredCauseData(causesData)}
      />
      <Testimonials data={testimonialsData} />
      <WorkStyle data={workStyleData} />
      <News data={newsData} />
      <Sponsers data={sponsersData} />
      <ContactInfo contactData={contactsData} socialData={socialMediasData} />
    </Layout>
  );
};
export async function getServerSideProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(`../../locales/${lng}.json`);
  return Promise.all([
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
    charityAPI("/main-carousels"),
    charityAPI("/welcome-section"),
    charityAPI("/what-we-do"),
    charityAPI("/featured-banner"),
    charityAPI("/popular-causes"),
    charityAPI("/speaking-numbers"),
    charityAPI("/upcoming-events"),
    charityAPI("/what-they-say"),
    charityAPI("/how-we-work"),
    charityAPI("/news-and-articles"),
    charityAPI("/Sponsers"),
    charityAPI("/footer"),
  ]).then(
    ([
      { data: contactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
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
      { data: footerData },
    ]) => {
      return {
        props: {
          contactsData,
          logoData,
          socialMediasData,
          pagesData,
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
          footerData,
          lngDict,
          lng,
        },
      };
    }
  );
}
export default Home;
