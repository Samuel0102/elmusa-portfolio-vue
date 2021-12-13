<template>
  <section id="home" class="w-full text-center text-white flex flex-col justify-center">
      <h2 class="font-bold text-6xl" id="home-title">Samuel Pacheco</h2>
      <VueWriter class="text-xl text-bold" :array="['Desenvolvedor Fullstack','Freelancer']" />
  </section>
</template>

<script>
import VueWriter from 'vue-writer'

export default {
    components: {VueWriter}
}
</script>

<style scoped>
    #home{
        background: url('../assets/back.png') no-repeat bottom, black;
        background-size: 450px;
        height: 90vh;
    }

</style>