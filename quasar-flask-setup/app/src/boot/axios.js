import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Cookies } from 'quasar'
import { Loading } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ withCredentials: true })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  api.defaults.headers.post['Content-Type'] = 'application/json';
  api.defaults.headers.delete['Content-Type'] = 'application/json';

  api.interceptors.response.use((response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      Loading.hide();
      return new Promise(() => {
      });
    }
    else{
      return Promise.reject(error);
    }
  });


  api.interceptors.request.use((request) => {
    request.headers['X-CSRFToken'] = Cookies.get('_csrf_token');
    return request;
  });

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
