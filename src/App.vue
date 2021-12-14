<template>
  <div>
    <TheHeader />
    <main>
      <TheHome />
      <TheAbout />
      <TheServices />
      <ThePortfolio />
      <div class="bg-green-500 pt-16 pb-5">
      <TheContact />
      </div>
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
