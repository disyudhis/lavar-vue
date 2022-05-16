<template>
  <body>
    <div>
      <NavBar></NavBar>
    </div>
    <div>
      <Heros></Heros>
    </div>
    <div class="pt-5">
      <Footer></Footer>
    </div>
  </body>
</template>

<style>
body {
  background-image: url(../assets/landing-page.png);
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>

<script>
import Heros from "../components/Heros.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Landing Page",
  components: {
    Heros,
    Footer,
    NavBar,
  },
};
</script>
