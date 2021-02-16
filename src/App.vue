<template>
  <v-app>
    <v-app-bar fixed color="white" elevate-on-scroll
      style="padding-right: 26px; padding-left: 26px;">
      <v-spacer></v-spacer>
      <v-toolbar-title class="siteTitle">Ibrahim Philip Ghalioum</v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://github.com/ibrahimpg" target="_blank" style="text-decoration: none;"><v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn></a>
      <Contact style="display: inline;" />
    </v-app-bar>

    <v-main>
      <White /> <Moon /> <Wolf />  <City />
    </v-main>

    <v-footer color="black" dark padless>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} Ibrahim PG
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import White from './components/White.vue';
import Moon from './components/Moon.vue';
import Wolf from './components/Wolf.vue';
import City from './components/City.vue';
import Contact from './components/ContactButton.vue';

export default {
  name: 'App',

  components: {
    White, Moon, Wolf, City, Contact,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400');

html {font-size: 100%;} /*16px*/

.v-application {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

.v-application p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}

/* ::-moz-selection { background: rgb(41, 172, 143); }
::selection { background: rgb(41, 172, 143); } */

:root {
  --brandcolor: #9575CD;
}

a:link, a:visited {
  text-decoration: none;
}

@media only screen and (max-width: 1370px) {
  .siteTitle {
    font-size: 1.04rem;
    line-height: inherit;
  }
}
</style>
