import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCoreVideoPlayer from 'vue-core-video-player'

import App from './App.vue'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.css"

import './style/custom.css'
import { createProvider } from './vue-apollo'


const ptBr = {
  "dashboard" : {
    "btn": {
      "play": "Play",
      "pause": "Pause",
      "fullscreen": "Full Screen",
      "exitFullscreen": "Exit Full Screen",
      "mute": "Mute",
      "unmute": "Unmute",
      "back": "Back",
      "pip": "Picture-in-Picture"
    },
    "settings" : {
      "autoplay": "Autoplay",
      "loop": "Loop",
      "speed": "Speed",
      "resolution": "Resolution"
    }
  },
  "layers": {
    "error": {
      "title": "(O_O)?  Error!",
      "2404": "Video Source Not Found",
      "2502": "Media Network Error",
      "2503": "Video Cannot DECODE",
      "2504": "Video Cannot Play!"
    },
    "loading": {
      "msg": "Loading ..."
    }
  }
}

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install vue-core-video-player
Vue.use(VueCoreVideoPlayer, {
  lang: ptBr
})


new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
