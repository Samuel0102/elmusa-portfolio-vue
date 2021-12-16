<template>
  <section id="portfolio" class="px-5 md:w-12/12 lg:px-10 mx-auto text-center">
    <SectionTitle :title="'Portfólio'" :resume="'Projetos e Trabalhos'" />

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
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { ProjectCard, SectionTitle },
  data() {
    return {
      projects: [
        {
          name: "Rest Countries",
          type: "Front-End",
          data: "2021",
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
          data: "2021",
          thumb: require("@/assets/suv.png"),
          gitRepo: "https://github.com/Samuel0102/gerenciador-de-vacinacao",
          url: "https://sistema-unico-vacinacao.herokuapp.com/",
          skills: "Bootstrap, PostgreSQL, Flask(Python) & JavaScript ",
          description: `
            Em trabalho com processos de consulta de banco e definição
            de rotas de views, o projeto visa ser capaz de armazenar dados
            de usuários a serem vacinados, usuários a vacinar, a própria
            vacinação e as vacinas utilizadas, como objeto de referência,
            no processo. 
          `,
        },
        {
          name: "To Do List",
          type: "FullStack",
          data: "2021",
          thumb: require("@/assets/todo.png"),
          gitRepo: "https://github.com/Samuel0102/todo-list",
          url: "https://todolist-front-end-mentor.herokuapp.com/",
          skills: "Flask(Python), Javascript, Bootstrap, Sqlite",
          description: `
            Um projeto de Lista de Tarefas, basicamente. Com possibilidade
            de controlar diversas tarefas, podendo desde excluí-las a
            adicionar novas. Desenvolvido com o microframework Flask do
            Python, utilizando Javascript e Jquery, além do bom e velho
            HTML, com CSS e seu mais célebre framework, Bootstrap. Surgiu
            a partir do desafio da Front-End Mentor.
          `,
        },
        {
          name: "Room Homepage",
          type: "Front-End",
          data: "2021",
          thumb: require("@/assets/room.png"),
          gitRepo:
            "https://github.com/Samuel0102/room-homepage-front-end-mentor",
          url: "https://vigorous-sinoussi-94d8d8.netlify.app/",
          skills: "Sass & JavaScript",
          description: `
            Desafio de Front End, implementado com o uso
            de JS e SASS tem como função ser um landing page de uma ficticia loja
            de móveis. Desenvolvido com o propósito de agregar nas habilidades em
            Javascript e para conhecimento mais avançado de pré-processors, além
            de primeira implementação de um Slider.
          `,
        },
        {
          name: "Easy Bank",
          type: "Front-End",
          data: "2021",
          thumb: require("@/assets/easy.png"),
          gitRepo: "https://github.com/Samuel0102/easy-bank-front-end-mentor",
          url: "https://jovial-chandrasekhar-e467fd.netlify.app/",
          skills: "Tailwind & JavaScript",
          description: `
            Projeto Front-End implementado com base em desafio proposto pela
            plataforma Front-End Mentor, consistindo em uma landing page de uma
            fictícia empresa de banco. Primeiro uso de Tailwind.
          `,
        },
        {
          name: "Sunnyside",
          type: "Front-End",
          data: "2021",
          thumb: require("@/assets/sunny.png"),
          gitRepo:
            "https://github.com/Samuel0102/sunnyside-frontendMentor-challenge",
          url: "https://samuel0102.github.io/sunnyside-frontendMentor-challenge/",
          skills: "JavaScript",
          description: `
            Projeto simples derivado do design e estrutura propostos pela
            Front End Mentor. Como desafio, era necessário apresentar um
            design o mais próximo do original e também que fosse responsivo
            e com estado "hover" nos elementos. Implementação pura, isto é,
            sem uso de frameworks ou libs, apenas HTML e CSS
          `,
        },
        {
          name: "Calculadora",
          type: "Front-End",
          data: "2021",
          thumb: require("@/assets/calc.png"),
          gitRepo:
            "https://github.com/Samuel0102/calculator-frontendmentor-challenge",
          url: "https://samuel0102.github.io/calculator-frontendmentor-challenge/",
          skills: "JavaScript",
          description: `
           Seguindo o design e a estrutura pedida pela plataforma Front-End Mentor,
           o projeto trata-se de uma calculadora, contendo as operações básicas
           da matemática, com possibilidade de troca para três temas distintos
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
#projects {
  @apply flex flex-col flex-wrap gap-x-20 gap-y-16 my-20
           md:flex-row md:justify-center;
}
</style>
