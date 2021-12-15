<template>
  <h2 id="subtitle" class="text-3xl relative inline-block">{{ subtitle }}</h2>
</template>

<script>
export default {
    props: ['subtitle']
}
</script>

<style scoped>
    #subtitle:before{
        content: "";
        width: 67%;
        border: 1px solid black;
        position: absolute;
        bottom: -2px;
    }

</style>