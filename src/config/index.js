const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://my-json-server.typicode.com/jeffersonadao/gospelflix-api/db';

export default {
  URL_BACKEND,
};
