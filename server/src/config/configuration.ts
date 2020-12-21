export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      uri: process.env.DATABASE_URI || 'mongodb://mongodb:27017/test',
    },
    api:{
        url:process.env.API_URL ||'http://hn.algolia.com/api/v1/search_by_date?query=nodejs'
    }
  });
  