<template>
  <div class="relative sm:hidden">
    <i
      :class="[{ 'fas fa-times': isOpen }, 'fas fa-bars']"
      id="hamburguer"
      @click="openMenu"
    ></i>

    <div class="fixed z-20 w-full h-full" id="overlay" v-if="isOpen">
      <nav class="mt-14 w-72 h-96 fixed left-10 bg-white">
        <ul class="text-left px-5 py-4 uppercase text-sm font-medium">
          <li><a href="#home">Home</a></li>
          <li class="py-4"><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li class="py-4"><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
ul li {
  @apply hover:text-green-600;
}

#overlay {
  background: rgba(0, 0, 0, 0.5);
}

#hamburguer {
  @apply leading-6 text-white text-xl
                cursor-pointer fixed z-30 py-5 right-0
                pr-6 md:pr-10 lg:pr-20;
}
</style>
