<template>
  <article>
      <img>
      <h3>{{ project.name }}</h3>
      <span>{{project.type}}</span>/<span>{{project.data}}</span>
  </article>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style scoped>

</style>