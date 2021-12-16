<template>
  <section id="contact">
    <SubTitle :subtitle="'Contatos'" />
    <p class="my-4 text-lg text-gray-700 text-justify">
      Para contato, disponível em todas as redes sociais e caso queira negociar
      algum <em>freela</em>, propostas ou qualquer assunto basta me chamar!
    </p>
    <span class="text-gray-800">
      <i class="fas fa-map-marker-alt mr-4 text-green-600"></i>Blumenau, Santa
      Catarina
    </span>
    <span class="block text-gray-800">
      <i class="fas fa-mobile-alt mr-4 text-green-600"></i>(47) 99769-4884
    </span>
    <span class="text-gray-800">
      <i class="far fa-envelope mr-3 text-green-600"></i
      >fsamuelpacheco@gmail.com
    </span>
    <div id="social-medias" class="my-6">
      <a href="https://www.linkedin.com/in/samuel-pacheco-ferreira-025a54216/"
        ><i class="fab fa-linkedin social-icon"></i
      ></a>
      <a href="https://www.instagram.com/i_am_elmusa/" class="mx-3"
        ><i class="fab fa-instagram social-icon"></i
      ></a>
      <a href="https://github.com/Samuel0102"
        ><i class="fab fa-github social-icon"></i
      ></a>
    </div>
  </section>
</template>

<script>
import SubTitle from "./SubTitle.vue";
export default {
  components: { SubTitle },
};
</script>

<style scoped>
.social-icon {
  @apply p-1 text-2xl border-2 border-green-700
                rounded-full text-center hover:text-white
                hover:bg-green-600 hover:border-green-400 transition-all;
  width: 45px;
}

#contact {
  @apply px-5 transform scale-90 md:w-8/12 lg:w-9/12 mx-auto bg-white py-4 shadow-xl;
}
</style>
