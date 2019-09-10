
export default {
  config: {
    hostname: 'http://3.0.91.68',
    path: {
      join: 'http://3.0.91.68/api/members',
      secession: 'http://3.0.91.68/api/members',
      login: 'http://3.0.91.68/api/members/login',
      logout: 'http://3.0.91.68/api/members/logout',
      info: 'http://3.0.91.68/api/members',
      performance: {
        product: 'http://3.0.91.68/api/performances/2/products'
      },
      register: {
        sale: 'http://3.0.91.68/api/products'
      }
    }
  },
  identity: null,
  password: null,
  progress: {
    stack: 0,
    show: false,
    timeout: 500,
    coverUpTimeout: null
  },
  snackbar: {
    show: false,
    color: 'info',
    mode: '',
    timeout: 10000,
    message: ''
  }
};
