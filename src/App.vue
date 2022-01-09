<template>
  <div>
    <MobileMenu />
    <TheHeader />
    <router-view></router-view>
    <footer
      v-if="this.$route.name === 'Index'"
      class="bg-green-600 text-white text-center py-5"
    >
      Designed by BootstrapMade
    </footer>
  </div>
</template>

<script>
import MobileMenu from "./components/MobileMenu.vue";
import TheHeader from "./components/TheHeader.vue";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "App",
  components: {
    TheHeader,
    MobileMenu,
  },
  created(){
    AOS.init({
      duration: 1000
    })
  }
};
</script>

<style>
  html{
    height: 100%;
  }
</style>