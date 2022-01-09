<template>
  <article class="article">
    <i :class="icon" class="icon"></i>
    <h3 class="title">{{ service }}</h3>
    <p class="description">{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: ["service", "description", "icon"],
};
</script>

<style scoped>
.icon {
  @apply text-4xl text-center
        border-green-600 rounded-full
        hover:bg-green-600 hover:border-green-100 
        hover:text-white transition ease-linear;
  border-width: 9px;
  padding: 27px 25px;

}

.title {
  @apply text-xl uppercase pt-2 pb-3 font-bold;
}

.article{
  @apply my-10 w-64 shadow-md p-4 rounded-md transform scale-105 hover:scale-110 hover:shadow-xl transition-all
         md:w-72
}

.description {
  @apply text-gray-700;
}
</style>
