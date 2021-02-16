<template>
  <div class="outerContainer">

    <div class="innerContainer">

      <div class="innerContainerDiv">
        <h1>Top Rated</h1>
        <p style="max-width: 450px;">With a 100% Job Success Score on Upwork
          over the course of more than 20 long term and short term contracts,
          I have a track record of providing value to my client's in establishing
          or expanding their digital presence.
          <br><br>
          In my client feedback, clients admire my work ethic, knowledge of the technology,
          communication skills, availability, and creative solutions to problems.
          Read my reviews and see my Upwork profile
          <a href="https://www.upwork.com/fl/ibrahimghali" target="_blank">here.</a>
        </p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Second',
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.outerContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 82vh;
  background-image: url('../assets/b4.jpg');
  background-color: #000;
  background-position: bottom right;
  background-size: cover;
  color: #fff;
}
.innerContainer {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
}
.innerContainerDiv {
  max-width: 500px;
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
    width: 100%;
    height: 50%;
  }
}
</style>
