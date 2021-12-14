<template>
  <section id="portfolio" class="w-72 mx-auto text-center">
    <h2 class="text-5xl font-bold mt-16">PORTFÓLIO</h2>
    <p class="mb-20 text-lg text-gray-700 relative " id="portfolio-desc">Projetos e Trabalhos</p>

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
                {name: "Rest Countries", type: "Front-End", data: "21 Jan. 2021", thumb: require("@/assets/rest.png")},
                {name: "SUV", type: "FullStack", data: "21 Jan. 2021", thumb: require("@/assets/suv.png")},
                {name: "To Do List", type: "FullStack", data: "21 Jan. 2021", thumb: require("@/assets/todo.png")},
                {name: "Room Homepage", type: "Front-End", data: "21 Jan. 2021", thumb: require("@/assets/room.png")},
                {name: "Easy Bank", type: "Front-End", data: "21 Jan. 2021", thumb: require("@/assets/easy.png")},
                {name: "Sunnyside", type: "Front-End", data: "21 Jan. 2021", thumb: require("@/assets/sunny.png")},

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