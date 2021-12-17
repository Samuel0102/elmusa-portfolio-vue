<template>
  <header class="header">
    <h1 class="leading-6 text-xl font-medium" id="port-title">Elmusa</h1>

    <nav v-if="isOnIndex">
      <ul class="hidden sm:block ul space-x-6">
        <li><a href="#" v-scroll-to="'#home'">Home</a></li>
        <li><a href="#about" v-scroll-to="'#about'">Sobre</a></li>
        <li><a href="#services" v-scroll-to="'#services'">Serviços</a></li>
        <li><a href="#portfolio" v-scroll-to="'#portfolio'">Portfólio</a></li>
        <li><a href="#contact" v-scroll-to="'#contact'">Contato</a></li>
      </ul>
    </nav>

    <div v-else>
      <router-link to="/" class="text-white">
        <i class="fas fa-arrow-left mr-3"></i>Back to Index
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isOnIndex() {
      return this.$route.name === "Index";
    },
  }
};
</script>

<style scoped>
@font-face {
  font-family: Moon;
  src: url("../assets/Moon Light.otf");
}

#port-title {
  font-family: Moon;
}

.header {
  @apply text-white flex items-baseline justify-between
           px-6 md:px-10 lg:px-20 py-5 bg-black sticky
           top-0 w-full z-10;
}

.ul li {
  @apply inline font-medium relative text-lg;
}

.ul li:hover:before {
  animation: underline 1s both;
  content: "";
  bottom: 0;
  border: 1px solid white;
  position: absolute;
}

@keyframes underline {
  from {
    width: 0;
  }
  to {
    width: 99.8%;
  }
}
</style>
