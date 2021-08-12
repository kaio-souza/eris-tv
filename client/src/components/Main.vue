<template>
  <b-container fluid class="bv-row main">
    <b-row fluid>
      <b-col cols="12" style="padding: 0; ">
        <div id="vue-core-video-player-box" class="player">
          <vue-core-video-player :cover="currentMovie.cover3" :src="currentMovie.source"></vue-core-video-player>
        </div> 
      </b-col>

    </b-row>
    <b-row fluid class="guide">
        <b-col cols="2" class="play-list panel">
        <ul class="nav nav-tabs|pills flex-column">
                <li class="nav-item">
            <a href="#" class="nav-link active"> <i class="fa fa-star"></i> Em Destaque</a>
          </li>

          <li class="nav-item" v-for="list in categoriesWithChannels" :key="list.category.id">
            <a href="#" class="nav-link "> <i :class="'fa fa-'+list.category.icon"></i> {{list.category.title}}</a>
          </li>

        </ul>
          </b-col>
    <b-col cols="10" class="panel">
         
        <Foot></Foot>
        </b-col>
  
    </b-row>
  </b-container>
</template>

<script>

import DATA from '../assets/data'
import Foot from './Foot.vue'
import gql from "graphql-tag"
let movie = DATA[2]


export default {
  name: 'Main',
  components: {
    Foot
  },
  data() {
    return {
      title: '',
      currentMovie: movie
    }
  },
  apollo:{
      categoriesWithChannels: gql`
        query {
          categoriesWithChannels {
            category {
              id,
              icon
              title
            },
            channels {
              logo
              name
              category_id
              number
            }
          }
        }

      `
  }
}
</script>

<style>

  .guide .panel{
  height: 40vh;
  overflow-y: scroll;
  padding-top: 20px;
  }
  .player {
    position: relative;
    height: 60vh;
    background-color: #000;
    font-weight: normal;
  }
 
  .panel {
  scroll-behavior: smooth;
}
.panel.disable-smooth {
  scroll-behavior: unset;
}
.panel::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}
.panel::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
.panel::-webkit-scrollbar-thumb {
  border: 3px solid #121212;
  background: #616161;
  border-radius: 100px;
}
.panel::-webkit-scrollbar-track {
  border: 0;
  background: #121212;
}
.panel::-webkit-scrollbar-corner {
  background: transparent;
}
.panel::-webkit-scrollbar-track:hover {
  background: #141414;
}
.panel::-webkit-scrollbar-track:active {
  background: #0a0a0a;
}
.panel::-webkit-scrollbar-thumb:hover {
  background: #6f6f6f;
}
.panel::-webkit-scrollbar-thumb:active {
  background: #7f7f7f;
}
</style>

