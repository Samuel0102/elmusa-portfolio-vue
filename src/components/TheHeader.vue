<template>
  <header class="flex items-center justify-between px-6 py-5 bg-black sticky top-0 w-full z-10">
    <h1 class="text-white leading-6 text-xl" id="port-title">Elmusa</h1>
    <i class="fas fa-bars leading-6 text-white text-xl"></i>
    <nav class="hidden">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
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
</style>
