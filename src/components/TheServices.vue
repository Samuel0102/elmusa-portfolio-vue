<template>
  <section
    id="services"
    class="px-5 md:w-10/12 mx-auto text-center md:my-24"
    data-aos="fade-down"
  >
    <SectionTitle
      :title="'Serviços'"
      :resume="'Serviços e Atuações principais'"
      
    />

    <div id="services-list">
      <MyService
        v-for="(item, index) in services"
        :key="index"
        :icon="item.icon"
        :service="item.service"
        :description="item.description"
       />
       
    </div>
  </section>
</template>

<script>
import MyService from "./MyService.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  components: { MyService, SectionTitle },
  data(){
    return {
      services: [
        {
          icon: 'fas fa-laptop-code',
          service: 'Desenvolvedor FullStack',
          description: `
           Desenvolvimento de Aplicações WEB
           com construção de Front & Back-End `
        },
        {
          icon: 'fas fa-code',
          service: 'Desenvolvedor Front-End',
          description:`
            Desenvolvimento de Web Sites(design to HTML)
            ou Aplicações WEB com consumo de API/Services
          `
        },
        {
          icon: 'fas fa-cogs',
          service: 'Desenvolvedor Python',
          description: `
            Desenvolvimento de Scripts de
            Automação(Web Scraping, Image Manipulation, etc.)
          `
        },
        {
          icon: 'fas fa-sitemap',
          service: 'Desenvolvedor Back-End',
          description: `
            Desenvolvimento de APIs, Serviços e
            Modelagem de Bancos Simples
          `
        }
      ]
    }
  }
};
</script>

<style scoped>
#services-list {
  @apply flex flex-wrap flex-col items-center gap-x-12
          md:flex-row md:justify-around md:items-baseline;
}
</style>
