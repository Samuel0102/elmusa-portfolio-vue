<template>
  <h2 id="title" class="text-5xl font-bold mt-12">{{ title }}</h2>
  <p id="resume" class="mt-2 mb-10 text-lg text-gray-700 relative">{{ resume }}</p>
</template>

<script>
export default {
    props: ['title', 'resume']
}
</script>

<style scoped>
#resume::before {
  content: " ";
  width: 40px;
  border: 3px solid;
  @apply text-green-600;
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  margin: 0 auto;
  
}

</style>