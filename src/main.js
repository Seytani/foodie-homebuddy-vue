import { createApp } from 'vue'
import VueAxios from 'vue-axios';
import store from '@/store'
import client from '@/api.js';
import injectAxios from '@/plugins/injectAxios'
import baseComponents from '@/plugins/baseComponents';
import { createAuth } from '@websanova/vue-auth';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import App from './App.vue'
import router from './router';

const customBearerDriver = {
  request: driverAuthBearer.request,

  response: function(res) {
    return res.data.access_token;
  }
};

const auth = createAuth({
    plugins: {
        http: client,
        router,
    },
    drivers: {
        http: driverHttpAxios,
        auth: customBearerDriver,
        router: driverRouterVueRouter,
    },
    options: {
        fetchData: {
            url: 'auth/userinfo',
            method: 'GET',
            enabled: true,
        },
        refreshData: false,
    }
})

createApp(App)
    .use(router)
    .use(auth)
    .use(store)
    .use(VueAxios, client)
    .use(injectAxios)
    .use(baseComponents)
    .mount('#app')
