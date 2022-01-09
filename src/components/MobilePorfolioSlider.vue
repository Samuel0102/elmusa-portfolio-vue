<template>
  <div class="w-full mx-auto my-20">
    <div id="buttons" class="relative top-20 flex items-center">
        <button class="slider-button -left-3" @click="goToPreviousSlide">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="slider-button -right-3" @click="goToNextSlide">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
    
    <ProjectCard :project="projects[actualSlide]"/>

  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
    components: {ProjectCard},
    data(){
        return {
            actualSlide: 0
        }
    },
    props: ["projects"],
    methods: {
        goToNextSlide(){
            if(this.projects.length -1 === this.actualSlide){
                this.actualSlide = 0;
            }

            this.actualSlide++;
        },
        goToPreviousSlide(){
            if(this.actualSlide === 0){
                this.actualSlide = this.projects.length;
            }

            this.actualSlide--;
        }
    }

}
</script>

<style>
.slider-button{
    @apply    absolute text-2xl transform hover:scale-125 transition-all
            bg-white py-1 px-2 rounded-full bg-opacity-60
}

</style>
