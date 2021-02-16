<template>
  <div class="outerContainer" style="padding-top: 65px;">

    <div class="innerContainer">

      <div class="innerContainerDiv">
        <h1 style="width: 100%;">Hey there!</h1>
        <p>
          Thank you for visiting my site. My name is Ibrahim
          and I am a freelance web developer with 3 years of experience building
          websites, web apps, and API's with full stack JavaScript and WordPress.
          <br><br>
          Feel free to look through my portfolio to see some of my previous work.
          You can check out
          <a href="https://www.upwork.com/fl/ibrahimghali" target="_blank">my Upwork profile</a>
          and contact me there
          or you can just <ContactLink style="display: inline; margin:0;" /> for
          any business inquiries (I am very responsive).
          I look forward to hearing from you!
          <ContactForm style="display: none;" />
          <!-- <br><br>
          <Biography style="display: inline; margin: 0px;" /> -->
        </p>
      </div>

      <div class="innerContainerDiv" style="max-width: 600px;">
        <Portfolio />
      </div>

    </div>

  </div>
</template>

<script>
import Portfolio from './Portfolio.vue';
import ContactLink from './ContactLink.vue';
import ContactForm from './ContactForm.vue';
// import Biography from './Biography.vue';

export default {
  name: 'Header',
  components: {
    Portfolio, ContactLink, ContactForm, /* Biography, */
  },
  data: () => ({
    showBio: false,
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
  background-image: url('../assets/arch.jpg');
  background-size: cover;
}
.innerContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
}
.innerContainerDiv {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 100%;
    height: 50%;
  }
}
</style>
