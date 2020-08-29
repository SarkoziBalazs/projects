<template>
  <div>
    <Menu/>
    <div class="content">
      <Nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components: {
      Menu, Footer
    }
  }
</script>

<style lang="scss">
  .content{
    margin: auto;
    max-width: 800px;
  }
</style>
