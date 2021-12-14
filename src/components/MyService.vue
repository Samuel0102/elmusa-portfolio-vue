<template>
  <article class="my-10 w-64">
    <i :class="icon" class="icon"></i>
    <h3 class="service">{{ service }}</h3>
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
  @apply text-4xl p-6
        border-green-600 rounded-full
        hover:bg-green-600 hover:border-green-100 
        hover:text-white transition  ease-linear;
  border-width: 9px;
  width: 109px;
  height: 105px;
}

.service {
  @apply text-xl uppercase pt-2 pb-3 font-bold;
}

.description {
  @apply text-gray-700;
}
</style>
