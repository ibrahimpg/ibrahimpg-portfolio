<template>
  <div class="outerContainer">

    <div class="innerContainer">

      <div class="innerContainerDiv">
        <h1>Full Stack</h1>
        <p style="max-width: 450px;">Equally comfortable building a UI with
          Vue, React, or WordPress as I am building an API with Node/Express
          and connecting it to an SQL or NoSQL database.
          Experience with serverless functions and cloud services.<br><br>
        </p>
        <div style="max-width: 450px; display: flex; justify-content: space-between;">
          <div style="text-align: center;">
            <v-icon color="white" x-large>mdi-web</v-icon>
            <p>Website</p>
          </div>
          <div style="text-align: center;">
            <v-icon color="white" x-large>mdi-cellphone</v-icon>
            <p>Web App</p>
          </div>
          <div style="text-align: center;">
            <v-icon color="white" x-large>mdi-server-network</v-icon>
            <p>Server</p>
          </div>
          <div style="text-align: center;">
            <v-icon color="white" x-large>mdi-cloud</v-icon>
            <p>Serverless</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Fourth',
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
  height: 80vh;
  background-image: url('../assets/nostars.jpg');
  background-color: #000;
  background-size: contain;
  color: #fff;
}
.innerContainer {
  display: flex;
  justify-content: flex-end;
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
