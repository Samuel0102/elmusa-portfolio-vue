<template>
  <div>
    <TheHeader />
    <main>
      <TheHome />
      <TheAbout />
    </main>
  </div>
</template>

<script>
import TheAbout from './components/TheAbout.vue'
import TheHeader from "./components/TheHeader.vue"
import TheHome from "./components/TheHome.vue"

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHome,
    TheAbout
  }
}
</script>

<style>

</style>
