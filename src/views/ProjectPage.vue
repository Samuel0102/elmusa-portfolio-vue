<template>
  <main id="project">
    <section id="project-img">
      <img :src="info.thumb" class="p-2 text-center h-52 object-cover" />
    </section>

    <section id="project-about" class="w-72 mx-auto">
      <div id="project-info">
        <h1 class="text-3xl text-center font-bold my-10">{{ info.name }}</h1>

        <div id="basic">
          <ul>
            <li><strong>Tecnologias: </strong>{{ info.skills }}</li>
            <li><strong>Categoria: </strong>{{ info.type }}</li>
            <li>
              <strong>Repositório: </strong>
              <a :href="info.gitRepo">{{ info.gitRepo }}</a>
            </li>
            <li>
              <strong>Publicação: </strong>
              <a :href="info.url">{{ info.url }}</a>
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
export default {
  data() {
    return {
      info: {},
    };
  },

  created() {
    if (!localStorage[0] || this.$route.name !== undefined){
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

<style></style>
