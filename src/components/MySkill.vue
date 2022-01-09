<template>
  <article id="skill" class="text-center">
      <i :class="icon"></i>
      <h3 class="my-4 uppercase font-bold">{{ skill }}</h3>
  </article>
</template>

<script>
export default {
    props: ["icon", "skill"]
}
</script>

<style scoped>
#skill i{
    @apply text-7xl
}

</style>