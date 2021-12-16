<template>
  <article class="my-10 w-64 md:w-72 shadow-sm p-4 rounded-md transform md:scale-110">
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

.description {
  @apply text-gray-700;
}
</style>
