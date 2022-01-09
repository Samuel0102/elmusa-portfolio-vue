<template>
  <div class="relative sm:hidden">
    <i
      v-if="isOnIndex"
      :class="whichHamburguerIcon"
      id="hamburguer"
      @click="isOpen = !isOpen"
    ></i>

    <transition name="slide-fade">
      <div id="overlay" v-if="isOpen">
        <nav class="nav">
          <ul class="ul">
            <li><a href="#" v-scroll-to="'#home'">Home</a></li>
            <li class="py-4"><a href="#about" v-scroll-to="'#about'">Sobre</a></li>
            <li><a href="#services" v-scroll-to="'#services'">Serviços</a></li>
            <li class="py-4">
              <a href="#portfolio" v-scroll-to="'#portfolio'">Portfólio</a>
            </li>
            <li><a href="#contact" v-scroll-to="'#contact'">Contato</a></li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isOnIndex() {
      return this.$route.name === "Index";
    },
    whichHamburguerIcon(){
      return this.isOpen ? 'fas fa-times' : 'fas fa-bars';
    }
  }
};
</script>

<style scoped>
.ul li {
  @apply hover:text-green-600;
}

.nav {
  @apply mt-20 w-9/12 h-4/6 mx-auto bg-white shadow-lg rounded-sm;
}

.ul {
  @apply text-left px-5 py-4 uppercase text-base font-medium text-gray-800;
}

#overlay {
  @apply fixed w-full z-20 mx-auto h-screen bg-black bg-opacity-70;
}

#hamburguer {
  @apply leading-6 pr-6 text-white text-xl cursor-pointer fixed z-30 py-5 right-0
          md:pr-10 lg:pr-20;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
}
</style>
