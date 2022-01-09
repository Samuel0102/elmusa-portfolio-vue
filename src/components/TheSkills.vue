<template>
  <section id="skills" class="w-10/12 mx-auto md:my-24" data-aos="fade-in">
      <SectionTitle
        :title="'Skills'"
        :resume="'O que eu uso no desenvolvimento'"
      />

      <div class="flex flex-wrap justify-center gap-20 mt-24"> 
        <MySkill
          v-for="(item, index) in skills"
          :key="index"
          :icon="item.icon"
          :skill="item.skill"
        />
      </div>
  </section>
</template>

<script>
import MySkill from './MySkill.vue'
import SectionTitle from './SectionTitle.vue'

export default {
  components: { SectionTitle, MySkill },
  data(){
    return {
      skills: [
        {
          icon: 'devicon-postgresql-plain colored',
          skill: 'PostgreSql'
        },
        {
          icon: 'devicon-python-plain text-green-600',
          skill: 'Python'
        },
        {
          icon: 'devicon-tailwindcss-plain colored',
          skill: 'Tailwindcss'
        },
        {
          icon: 'devicon-sass-plain colored',
          skill: 'sass'
        },
        {
          icon: 'devicon-bootstrap-plain colored',
          skill: 'bootstrap'
        },
        {
          icon: 'devicon-flask-plain colored',
          skill: 'flask'
        },
        {
          icon: 'devicon-javascript-plain colored',
          skill: 'EcmaScript(JS)'
        },
        {
          icon: 'devicon-vuejs-plain colored',
          skill: 'VueJs'
        },
        {
          icon: 'devicon-jquery-plain colored',
          skill: 'Jquery'
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>