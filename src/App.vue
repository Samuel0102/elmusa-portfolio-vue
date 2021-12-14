<template>
  <div>
    <TheHeader />
    <main>
      <TheHome />
      <TheAbout />
      <TheServices />
      <ThePortfolio />
    </main>
  </div>
</template>

<script>
import TheAbout from './components/TheAbout.vue'
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
    ThePortfolio
  }
}
</script>

<style>

</style>
