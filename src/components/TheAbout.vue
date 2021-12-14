<template>
  <section id="about" class="w-72 mx-auto">
    <div id="profile" class="mt-10">
      <img
        src="../assets/profile.jpeg"
        class="h-52 w-full object-cover mx-auto rounded-sm"
      />

      <ul id="profile-info" class="mt-5 w-full mx-auto">
        <li><strong>Nome: </strong>Samuel Pacheco</li>
        <li><strong>Atuação: </strong> FullStack</li>
        <li><strong>Email: </strong>fsamuelpacheco@gmail.com</li>
        <li><strong>Telefone: </strong>(47) 99769-4884</li>
      </ul>
    
      <h2 class="font-bold text-lg my-2">Habilidades</h2>
      <div id="skills" class="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
          <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
          <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white">
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
          <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
          <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D">
      </div>
    </div>
    <div id="abt-description" class="mt-5">
      <h2 class="text-3xl relative title">Sobre Mim</h2>
      <p class="mt-8 text-gray-700 text-justify">
          Um amante assíduo de música e de filmes de terror, sempre
          estudando e tentando descobrir coisas novas. Enquanto pessoa, movido
          pela mudança e pelo apreço do uso da razão e da lógica na solução
          dos mais variados problemas     
      </p>
        <p class="mt-4 text-gray-700 text-justify">
            Com o objetivo de melhor entrega possível, atuo em meus projetos
            visando qualidade, utilizando das melhores práticas e sempre com o intuito
            de construir aplicações e websites que além de bonitos, sejam responsivos
            e cumpram suas necessidades de utilização 
        </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
    .title::before {
    content: "";
    width: 96px;
    border: 1px solid black;
    position: absolute;
    bottom: -2px;
    }

    #profile-info li{
        line-height: 1.8em;
    }

</style>
