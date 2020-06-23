module.exports = {
  env: {
    url: process.env.REACT_APP_STRAPI_URL,
    urlAr : process.env.REACT_APP_STRAPI_URL_AR
  },
  experimental: {
    redirects() {
      return [
        {
          source: "/",
          permanent: true,
          destination: "/en",
        },
      ];
    },
  },
};
