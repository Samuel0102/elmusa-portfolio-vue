<template>
  <div>
    <TheHeader />
    <main>
      <TheHome />
      <TheAbout />
      <TheServices />
      <ThePortfolio />
      <div class="bg-green-600 pt-16 pb-5 shadow-2xl">
      <TheContact />
      </div>
      <footer class="bg-green-600 text-white text-center py-5">
        Design inspirado em: https://bootstrapmade.com/demo/DevFolio/
      </footer>
    </main>
  </div>
</template>

<script>
import TheAbout from './components/TheAbout.vue'
import TheContact from './components/TheContact.vue'
import TheHeader from "./components/TheHeader.vue"
import TheHome from "./components/TheHome.vue"
import ThePortfolio from './components/ThePortfolio.vue'
import TheServices from './components/TheServices.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHome,
    TheAbout,
    TheServices,
    ThePortfolio,
    TheContact
  }
}
</script>

<style>

</style>
