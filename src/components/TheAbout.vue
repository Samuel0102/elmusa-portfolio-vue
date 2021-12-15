<template>
  <section id="about">
    <div id="profile">
      <img src="../assets/profile.jpeg" id="profile-img" />

      <div id="profile-about">
        <ul id="profile-info" class="mt-5 md:mt-0 lg:mt-5 w-full">
          <li><strong>Nome: </strong>Samuel Pacheco</li>
          <li><strong>Atuação: </strong> FullStack</li>
          <li><strong>Email: </strong>fsamuelpacheco@gmail.com</li>
          <li><strong>Telefone: </strong>(47) 99769-4884</li>
        </ul>

        <h2 class="font-bold text-lg my-2">Habilidades</h2>
        <div id="skills" class="flex flex-wrap gap-2 w-full">
          <img
            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
          />
          <img
            src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
          />
          <img
            src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
          />
        </div>
      </div>

      <div id="profile-description">
        <SubTitle :subtitle="'Sobre Mim'" />
        <p class="mt-8 text-gray-700 text-justify">
          Um amante assíduo de música e de filmes de terror, sempre estudando e
          tentando descobrir coisas novas. Enquanto pessoa, movido pela mudança
          e pelo apreço do uso da razão e da lógica na solução dos mais variados
          problemas
        </p>
        <p class="mt-4 text-gray-700 text-justify">
          Com o objetivo de melhor entrega possível, atuo em meus projetos
          visando qualidade, utilizando das melhores práticas e sempre com o
          intuito de construir aplicações e websites que além de bonitos, sejam
          responsivos e cumpram suas necessidades de utilização
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SubTitle from "./SubTitle.vue";

export default {
  components: {
    SubTitle,
  },
};
</script>

<style scoped>
#profile {
  @apply mt-10 md:grid grid-cols-2 md:grid-rows-2 md:gap-x-12 lg:grid-rows-3;
  grid-template-rows: auto;
}

#about {
  @apply px-5 md:p-5 md:w-10/12 lg:w-9/12 mx-auto md:shadow-xl my-5;
  
}

#profile-img {
  @apply h-52 w-full md:w-7/12 lg:w-9/12 row-start-1 col-start-1 object-cover mx-auto rounded-sm;
}

#profile-info li {
  line-height: 1.8em;
}

#profile-about {
  @apply w-full lg:w-9/12 md:row-start-1 md:col-start-2 lg:col-start-1 lg:row-start-2 mx-auto;
}

#profile-description {
  @apply mt-5 lg:m-0 md:row-start-2 md:col-span-2 lg:col-start-2 lg:row-span-3;
}
</style>
