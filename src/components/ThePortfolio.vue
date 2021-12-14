<template>
  <section id="portfolio" class="w-72 mx-auto text-center">
    <h2 class="text-5xl font-bold mt-16">PORTFÓLIO</h2>
    <p class="mb-10 text-lg text-gray-700 relative " id="portfolio-desc">Projetos e Trabalhos</p>

    <div id="projects">
        <ProjectCard v-for="(project, index) in projects" :project="project" :key="index" />
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components: { ProjectCard },
    data(){
        return {
            projects: [
                {name: "Rest Countries", type: "Front-End", data: "21/01/2004"},
                {name: "SUV", type: "FullStack", data: "21/01/2004"},
                {name: "To Do List", type: "FullStack", data: "21/01/2004"},
                {name: "Room Homepage", type: "Front-End", data: "21/01/2004"},
                {name: "Easy Bank", type: "Front-End", data: "21/01/2004"},
                {name: "Sunnyside", type: "Front-End", data: "21/01/2004"},

            ]
        }
    }
}
</script>

<style scoped>
    #portfolio-desc::before{
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