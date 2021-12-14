<template>
  <section id="services" class="w-72 mx-auto text-center flex flex-col items-center">
    <h2 class="text-5xl font-bold mt-16 w-64">SERVIÇOS</h2>
    <p class="mb-10 text-lg text-gray-700 relative w-64" id="services-desc">Serviços e Atuações principais</p>

    <MyService
      :icon="'fas fa-briefcase'"
      :service="'Desenvolvedor FullStack'"
      :description="'Desenvolvimento de WebSites e Aplicações com integração Front e Back-End'"
    />
    <MyService
      :icon="'fas fa-laptop-code'"
      :service="'Desenvolvedor Python'"
      :description="'Desenvolvimento de Scripts para WebScraping, Automações, etc.'"
    />
  </section>
</template>

<script>
import MyService from "./MyService.vue";

export default {
  components: { MyService },
};
</script>

<style scoped>
    #services-desc::before{
        content: " ";
        width: 37px;
        border: 3px solid;
        @apply text-green-600;
        position: absolute;
        bottom: -20px;
        left: 102px;

    }
</style>
