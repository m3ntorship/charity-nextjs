function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
// export function getServerSideProps() {
//   return Promise.all([
//     charityAPI("/main-carousels"),
//     charityAPI("/welcome-section"),
//     charityAPI("/what-we-do"),
//     charityAPI("/featured-banner"),
//     charityAPI("/popular-causes"),
//     charityAPI("/speaking-numbers"),
//     // charityAPI("/upcoming-events"),
//     charityAPI("/what-they-say"),
//     charityAPI("/how-we-work"),
//     charityAPI("/news-and-articles"),
//     charityAPI("/Sponsers"),
//     charityAPI("/main-contacts"),
//   ]).then(
//     ([
//       { data: headerCarouselData },
//       { data: welcomeData },
//       { data: activitiesData },
//       { data: featuredBannerData },
//       { data: causesData },
//       { data: numbersData },
//       // { data: upcomingEventsData },
//       { data: testimonialsData },
//       { data: workStyleData },
//       { data: newsData },
//       { data: sponsersData },
//       { data: mainContactData },
//     ]) => {
//       return {
//         props: {
//           headerCarouselData,
//           welcomeData,
//           activitiesData,
//           featuredBannerData,
//           causesData,
//           numbersData,
//           // upcomingEventsData,
//           testimonialsData,
//           workStyleData,
//           newsData,
//           sponsersData,
//           mainContactData,
//         },
//       };
//     }
//   );
// }
export default MyApp;
