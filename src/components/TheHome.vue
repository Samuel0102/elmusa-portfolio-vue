<template>
  <section id="home">
    <h2
      class="lg:pr-10 xl:pr-36 font-bold text-6xl xl:text-7xl"
      id="home-title"
    >
      Samuel Pacheco
    </h2>
    <VueWriter
      class="lg:pr-10 xl:pr-36 text-xl lg:text-2xl text-bold"
      :array="['Desenvolvedor Fullstack', 'Freelancer']"
    />
  </section>
</template>

<script>
import VueWriter from "vue-writer";

export default {
  components: { VueWriter },
};
</script>

<style scoped>
#home {
  @apply w-full text-center lg:text-right text-white flex flex-col justify-center;
  background: url("../assets/back.png") no-repeat, black;
  background-attachment: fixed;
  background-position: center 70%;
  background-size: max-width(200px);
  height: 90vh;
}
@media (min-width: 768px) {
  #home {
    background-position: 5% 70%;
    background-size: 100%;
  }
}

@media (min-width: 1024px) {
  #home {
    background-position: 5% 70%;
    background-size: 70%;
  }
}

@media (min-width: 1200px) {
  #home {
    background-position: 5% 70%;
    background-size: 55%;
  }
}
</style>
