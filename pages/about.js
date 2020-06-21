import Layout from "../components/Layout";
import { charityAPI } from "../clients";

const About = ({
  footerData,
  ContactsData,
  logoData,
  socialMediasData,
  pagesData,
}) => {
  return (
    <Layout
      footerData={footerData}
      ContactsData={ContactsData}
      logoData={logoData}
      socialMediasData={socialMediasData}
      pagesData={pagesData}
    >
      About components goes here
    </Layout>
  );
};

export function getServerSideProps() {
  return Promise.all([
    charityAPI("/main-contacts"),
    charityAPI("/logo"),
    charityAPI("/socialmedias"),
    charityAPI("/pages"),
    charityAPI("/footer"),
  ]).then(
    ([
      { data: ContactsData },
      { data: logoData },
      { data: socialMediasData },
      { data: pagesData },
      { data: footerData },
    ]) => {
      return {
        props: {
          ContactsData,
          logoData,
          socialMediasData,
          footerData,
          pagesData,
        },
      };
    }
  );
}

export default About;
