module.exports = {
  env: {
    url: process.env.REACT_APP_STRAPI_URL,
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
