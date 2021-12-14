<template>
  <main>
    <TheHome />
    <TheAbout />
    <TheServices />
    <ThePortfolio />
    <div class="bg-green-600 pt-16 pb-5 shadow-2xl">
      <TheContact />
    </div>
  </main>
</template>

<script>
import TheAbout from "@/components/TheAbout.vue";
import TheContact from "@/components/TheContact.vue";
import TheHome from "@/components/TheHome.vue";
import ThePortfolio from "@/components/ThePortfolio.vue";
import TheServices from "@/components/TheServices.vue";

export default {
  name: "App",
  components: {
    TheHome,
    TheAbout,
    TheServices,
    ThePortfolio,
    TheContact,
  },
};
</script>

<style></style>
