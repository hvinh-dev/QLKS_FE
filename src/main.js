import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import Toaster from "@meforma/vue-toaster"
import Auth from './layout/wrapper/auth.vue'
import Client from './layout/wrapper/client.vue'
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App)

app.use(router, Toaster)
app.use(vue3GoogleLogin, {
    clientId: '406212802180-8cutsfj7ajcjdk4p7gi7kifl5vbqfaie.apps.googleusercontent.com'
  })
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component("client-layout", Client);

app.mount("#app")