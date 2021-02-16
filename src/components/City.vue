<template>
  <div class="outerContainer">

    <div class="innerContainer">

      <div class="innerContainerDiv" style="align-items: center;">
        <p style="margin:0;">
          <v-icon x-large color=white>mdi-format-quote-open</v-icon>
          Ibrahim responded to my job post within 1 min and fixed my
          website within 1 hour. I appreciate that he was chatting with
          me the entire time I was there. Excellent job that is done quick!
          <v-icon x-large color=white>mdi-format-quote-close</v-icon>
          <br><br>
          <v-rating
            v-model="rating"
            color="white"
            readonly
          ></v-rating>
        </p>
      </div>

      <div class="innerContainerDiv" style="align-items: center;">
        <p>
          <v-icon x-large color=white>mdi-format-quote-open</v-icon>
          He’s extremely responsive, creative and helpful!
          He made this such a quick and seamless experience, which was
          awesome with this being my first time hiring a freelancer.
          <v-icon x-large color=white>mdi-format-quote-close</v-icon>
          <br><br>
          <v-rating
            v-model="rating"
            color="white"
            readonly
          ></v-rating>
        </p>
      </div>

      <div class="innerContainerDiv" style="align-items: center;">
        <p>
          <v-icon x-large color=white>mdi-format-quote-open</v-icon>
          The task was to install the capability to receive payments [...]
          by credit card and Paypal. [...]
          I have already recommended him to others and will definitely go to him for
          all my website needs.
          <v-icon x-large color=white>mdi-format-quote-close</v-icon>
          <br><br>
          <v-rating
            v-model="rating"
            color="white"
            readonly
          ></v-rating>
          </p>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Third',
  components: {
  },
  data: () => ({
    rating: 5,
  }),
};
</script>

<style scoped>
.outerContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: linear-gradient(
          rgba(0, 0, 0, 0.9),
          rgba(0, 0, 0, 0.9)
        ),url('../assets/ny.jpg');
  background-position: bottom right;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
}
.innerContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
}
.innerContainerDiv {
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
}
@media only screen and (max-width: 1370px) {
  .outerContainer {
    height: auto;
    padding: 20px 0;
  }
  .innerContainer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .innerContainerDiv {
    width: 500px;
    height: 50%;
  }
}
@media only screen and (max-width: 510px) {
  .innerContainerDiv {
    width: 310px;
    height: 50%;
  }
}
</style>
