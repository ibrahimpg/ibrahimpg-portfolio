<template>
  <v-card width="500" elevation="12" rounded=0>

    <!-- SYSTEM BAR -->
    <v-system-bar color="#4527A0" dark>
      <span>IbrahimPortfolio.vue</span>
      <v-spacer></v-spacer>
      <v-icon>mdi-window-minimize</v-icon>
      <v-icon>mdi-window-maximize</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>
    <!-- -------- -->

    <!-- TOOL BAR -->
    <v-toolbar color="#5E35B1" dark>
      <v-avatar>
        <img src="../assets/profile.jpg" alt="Ibrahim" style="object-fit: cover;">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-tabs center-active style="width: auto; overflow-x: hidden;">
        <v-tab v-on:click="switch1">1</v-tab>
        <v-tab v-on:click="switch2">2</v-tab>
        <v-tab v-on:click="switch3">3</v-tab>
      </v-tabs>
    </v-toolbar>
    <!-- -------- -->

    <v-container fluid>
      <v-row dense>

        <v-col
          v-for="card in cards.slice(tabChosen,tabChosen+3)"
          :key="card.title"
          :cols="card.flex"
        >

          <v-hover v-slot="{ hover }">
            <v-card rounded=0>
              <v-img
                :src="card.src"
                class="white--text align-end portimage"
                gradient="to bottom, rgba(0,0,0,.65), rgba(0,0,0,.9)"
                height="170px"
                :class="{ 'portcard': hover }"
              >
                <v-card-title v-text="card.title" class="cardMobileTitle"></v-card-title>
                <v-card-subtitle style="color: #fff;" class="cardMobileSubtitle">
                  {{ card.description }}
                </v-card-subtitle>
                <v-card-actions>

                <div class="align-self-center">
                  <v-btn
                  v-if='card.url'
                  :href=card.url
                  target="_blank"
                  rel="noreferrer"
                  :class="{'show-btns':hover}" color="rgba(0,0,0,0)" icon>
                    <v-icon :class="{ 'show-btns': hover }" color="rgba(0,0,0,0)">
                      mdi-open-in-new
                    </v-icon>
                  </v-btn>
                  <v-btn
                    v-if='card.giturl'
                    :href=card.giturl
                    target="_blank"
                    :class="{'show-btns':hover}" color="rgba(0,0,0,0)" icon>
                    <v-icon :class="{ 'show-btns': hover }" color="rgba(0,0,0,0)">
                      mdi-github
                    </v-icon>
                  </v-btn>
                </div>

                </v-card-actions>
              </v-img>
            </v-card>
          </v-hover>

        </v-col>

      </v-row>
    </v-container>

  </v-card>
</template>

<script>
import alphafarmsimg from '../assets/alphafarms.jpg';
import raintechimg from '../assets/raintech.jpg';
import missionmorale from '../assets/missionmorale.jpg';
import fiftystates from '../assets/fiftystates.jpg';
import bankable from '../assets/bankable.jpg';
import thv from '../assets/thv.jpg';
import venomapi from '../assets/venomapi.jpg';
import venomgram from '../assets/venomgram.jpg';
import fpm from '../assets/fpm.jpg';

export default {
  data: () => ({
    cards: [
      {
        title: 'Mission Morale',
        src: missionmorale,
        flex: 12,
        description: 'Charity organization for US troops.',
        url: 'https://missionmorale.org',
      },
      {
        title: 'Rain.Tech',
        src: raintechimg,
        description: 'Managed IT, cloud, & cyber security firm.',
        url: 'https://rain.tech',
        flex: 6,
      },
      {
        title: 'Alpha Farms',
        src: alphafarmsimg,
        description: 'Cannabis manufacturer & distributor.',
        url: 'https://alphafarmsllc.com',
        flex: 6,
      },
      {
        title: 'Five Pointe Moving',
        src: fpm,
        url: 'https://fivepointemoving.com',
        description: 'Moving company.',
        flex: 12,
      },
      {
        title: 'The Healing Voices',
        src: thv,
        description: 'Catholic blog for victims of abuse.',
        url: 'https://thehealingvoices.org',
        flex: 6,
      },
      {
        title: 'Bankable Blog',
        src: bankable,
        url: 'https://bankable.org/blog',
        description: 'Blog layout built with dynamic PHP templating.',
        flex: 6,
      },
      {
        title: 'Venomgram',
        src: venomgram,
        url: 'https://venomgram.com',
        description: 'Instagram clone PWA built with Vue.',
        giturl: 'https://github.com/ibrahimpg/venomgram-ui',
        flex: 12,
      },
      {
        title: 'Venomgram Server',
        src: venomapi,
        flex: 6,
        description: 'REST API built with Express & MongoDB.',
        giturl: 'https://github.com/ibrahimpg/venomgram-server',
      },
      {
        title: 'Name the 50 states',
        src: fiftystates,
        url: 'https://ibrahimpg.github.io/50states/',
        flex: 6,
        description: 'Quiz built with Vue & deployed on GitHub Pages.',
        giturl: 'https://github.com/ibrahimpg/50states',
      },
    ],
    tabChosen: 0,
  }),
  methods: {
    switch1() {
      this.tabChosen = 0;
    },
    switch2() {
      this.tabChosen = 3;
    },
    switch3() {
      this.tabChosen = 6;
    },
  },
};
</script>

<style scoped>

.portcard {
  background-image: linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)) !important;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

@media only screen and (max-width: 900px) {
  .cardMobileTitle {
    padding-top: 4px;
    padding-bottom: 17px;
    font-size: 0.83rem;
    word-break: normal;
    line-height: 1.215rem;
    font-weight: bold;
  }
  .cardMobileSubtitle {
    padding-bottom: 4px;
    font-size: 0.67rem;
    line-height: 1.215;
  }
}

</style>
