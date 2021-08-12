<template>
  <div id="app">
    <Head></Head>
    <Main></Main>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCoreVideoPlayer from 'vue-core-video-player'
 
import Head from './components/Head.vue'
import Main from './components/Main.vue'

Vue.use(VueCoreVideoPlayer, {
  lang: 'zh-CN'
})

export default {
  name: 'App',
  components: {
    Head,
    Main
  }
}
</script>

<style>

</style>
