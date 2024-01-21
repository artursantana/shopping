

// next.config.js
module.exports = {
    // outras configurações podem estar aqui
  
    async redirects() {
      return [
        {
          source: '/Search',
          destination: '/promotion/search/Search',
          permanent: true,
        },
        {
            source: '/Form',
            destination: '/promotion/form/Form',
            permanent: true,
          },
          {
            source: '/form/:id',
            destination: '/promotion/form/Form/:id',
            permanent: true,
          },
      ];
    },
  };