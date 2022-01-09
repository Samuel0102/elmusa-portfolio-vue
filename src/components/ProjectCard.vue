<template>
  <article id="article">
    <img :src="project.thumb" class="img" />
    <h3 class="text-lg font-bold mt-5">{{ project.name }}</h3>
    <span class="text-sm text-green-600">{{ project.type }}</span>
    /
    <span class="text-sm">{{ project.data }}</span>

    <router-link :to="{ name: 'Projects', params: project }">
      <i class="fas fa-search-plus btn text-center"></i>
    </router-link>
  </article>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style scoped>
.btn {
  @apply text-2xl absolute right-1 bottom-1 text-green-600;
  width: 33px;
}

.img {
  @apply object-cover h-40 md:h-44 transform hover:scale-110 transition duration-700 rounded-sm;
}

#article{
  @apply text-left relative overflow-hidden w-10/12 mx-auto
         md:w-5/12
         lg:w-4/12
         xl:w-3/12 
}

</style>
