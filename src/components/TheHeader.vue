<template>
  <header>
    <h1 class="text-white leading-6 text-xl" id="port-title">Elmusa</h1>
    
    <div v-if="this.$route.name === 'Index'">
      <i class="fas fa-bars leading-6 text-white text-xl"></i>
    </div>
    
    <nav v-else-if="1>3" class="hidden">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <div v-else> 
        <router-link to="/" class="text-white">
          <i class="fas fa-arrow-left mr-3"></i>Back to Index
        </router-link>
    </div>

  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: Moon;
  src: url("../assets/Moon Light.otf");
}

#port-title {
  font-family: Moon;
}

header{
  @apply flex items-center justify-between px-6 py-5 bg-black sticky top-0 w-full z-10;
}
</style>
