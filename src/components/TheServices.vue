<template>
  <section id="services" class="px-5 md:w-10/12 lg:w-9/12 mx-auto text-center">
    <SectionTitle
      :title="'Serviços'"
      :resume="'Serviços e Atuações principais'"
    />

    <div id="services-list">
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
    </div>
  </section>
</template>

<script>
import MyService from "./MyService.vue";
import SectionTitle from './SectionTitle.vue';

export default {
  components: { MyService, SectionTitle },
};
</script>

<style scoped>

#services-list {
  @apply flex flex-col items-center md:flex-row md:justify-around md:items-baseline;
}
</style>
