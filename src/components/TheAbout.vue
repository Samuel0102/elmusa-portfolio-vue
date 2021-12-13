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
    
      <div id="skills">
          <MySkill :skill="'python'" :level="'Intermediate'" />
      </div>
    </div>
    <div id="abt-description" class="mt-5">
      <h2 class="text-3xl relative">Sobre Mim</h2>
      <p class="mt-8 text-gray-700">
          Um amante assíduo de música e de filmes de terror, sempre
          estudando e tentando descobrir coisas novas. Enquanto pessoa, movido
          pela mudança e pelo apreço do uso da razão e da lógica na solução
          dos mais variados problemas     
      </p>
        <p class="mt-4 text-gray-700">
            Com o objetivo de melhor entrega possível, atuo em meus projetos
            visando qualidade, utilizando das melhores práticas e sempre com o intuito
            de construir aplicações e websites que além de bonitos, sejam responsivos
            e cumpram suas necessidades de utilização 
        </p>
    </div>
  </section>
</template>

<script>
import MySkill from "./MySkill.vue"

export default {
    components:{MySkill}
};
</script>

<style scoped>
    #abt-description h2::before {
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
