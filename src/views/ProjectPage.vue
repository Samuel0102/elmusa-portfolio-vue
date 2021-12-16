<template>
  <main id="project">
    <section id="project-img">
      <img :src="info.thumb" class="w-full" />
    </section>

    <section id="project-about">
      <div id="project-info">
        <SubTitle class="my-8" :subtitle="info.name"/>

        <div id="basic" >
          <ul class="break-words">
            <li><strong>Tecnologias: </strong>{{ info.skills }}</li>
            <li><strong>Categoria: </strong>{{ info.type }}</li>
            <li>
              <strong>Repositório: </strong>
              <a :href="info.gitRepo" target="_blank">{{ info.gitRepo }}</a>
            </li>
            <li>
              <strong>Publicação: </strong>
              <a :href="info.url" target="_blank">{{ info.url }}</a>
            </li>
          </ul>
        </div>

        <div id="description" class="mt-8">
          <h2 class="font-bold text-lg">Descrição</h2>
          <p class="text-justify">
            {{ info.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SubTitle from '../components/SubTitle.vue';
export default {
  components: { SubTitle },
  data() {
    return {
      info: {},
    };
  },

  created() {
    if (Object.entries(this.$route.params).length  > 0){
        localStorage.setItem(0, JSON.stringify(this.$route.params));
    }

    this.setData();
  },

  methods: {
    setData() {
      this.info = JSON.parse(localStorage[0]);
    },
  },
};
</script>

<style>
  #project{
    @apply w-full lg:flex lg:items-center mx-auto md:w-10/12 lg:mt-16;
  }

  #project-img{
    @apply p-5 md:p-0 md:mt-8 w-full lg:pr-20 object-contain;
  }

  #project-about{
    @apply md:w-11/12 lg:w-full mx-auto px-5 pb-5 md:mt-5;
  }

</style>
