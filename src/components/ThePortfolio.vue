<template>
  <section id="portfolio" class="w-72 mx-auto text-center">
    <h2 class="text-5xl font-bold mt-16">PORTFÓLIO</h2>
    <p class="mb-20 text-lg text-gray-700 relative" id="portfolio-desc">
      Projetos e Trabalhos
    </p>

    <div id="projects">
      <ProjectCard
        v-for="(project, index) in projects"
        :project="project"
        :key="index"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          name: "Rest Countries",
          type: "Front-End",
          data: "21 Jan. 2021",
          thumb: require("@/assets/rest.png"),
          gitRepo: "https://github.com/Samuel0102/rest-countries-tailwind",
          url: "https://vibrant-cray-150260.netlify.app/country.html#",
          skills: "Tailwind, RestCountries API & JavaScript",
          description: `
            Projeto implementado com base em design proposto
            como desafio pela plataforma Front-End Mentor.
            Consiste em uma aplicação que consome a API Rest
            Countries possibilitando listagem de países,
            filtragem e visualização detalhada de um país.
          `,
        },
        {
          name: "SUV",
          type: "FullStack",
          data: "21 Jan. 2021",
          thumb: require("@/assets/suv.png"),
          gitRepo: "https://github.com/Samuel0102/gerenciador-de-vacinacao",
          url: "https://sistema-unico-vacinacao.herokuapp.com/",
          skills: "Bootstrap, PostgreSQL, Flask(Python) & JavaScript ",
          description: `
            Em trabalho com processos de consulta de banco e definição
            de rotas de views, o projeto visa ser capaz de armazenar dados
            de usuários a serem vacinados, usuários a vacinar, a própria
            vacinação e as vacinas utilizadas, como objeto de referência,
            no processo. A principal aposta do SUV é se compreender como
            um projeto que encontre base na necessidade atual da virtualização
            e digitalização de processos, até então, materialistas e arcaicos.
            O armazenamento de dados tão importantes, como os de vacinações,
            ainda sujeitam-se a perdas e obstruções quando guardados
            em documentos físicos, por exemplo. Tendo seu armazenamento em uma nuvem,
            a integridade desses dados teria mais chances de continuar intacta.
          `,
        },
        {
          name: "To Do List",
          type: "FullStack",
          data: "21 Jan. 2021",
          thumb: require("@/assets/todo.png"),
          gitRepo: "",
          url: "",
          skills: "",
          description: `
          `,
        },
        {
          name: "Room Homepage",
          type: "Front-End",
          data: "21 Jan. 2021",
          thumb: require("@/assets/room.png"),
          gitRepo: "",
          url: "",
          skills: "",
          description: `
          `,
        },
        {
          name: "Easy Bank",
          type: "Front-End",
          data: "21 Jan. 2021",
          thumb: require("@/assets/easy.png"),
          gitRepo: "",
          url: "",
          skills: "",
          description: `
          `,
        },
        {
          name: "Sunnyside",
          type: "Front-End",
          data: "21 Jan. 2021",
          thumb: require("@/assets/sunny.png"),
          gitRepo: "",
          url: "",
          skills: "",
          description: `
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
#portfolio-desc::before {
  content: " ";
  width: 37px;
  border: 3px solid;
  @apply text-green-600;
  position: absolute;
  bottom: -20px;
  left: 40%;
  right: 50%;
}
</style>
