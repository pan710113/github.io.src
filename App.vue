<template>

  <!-- Header -->
  <div class="sticky-top">
    <Header @update_search_list="update_search_list" />
  </div>

  <!-- Main -->
  <div class="main_container">
    <RouterView :search_list="search_list" />
  </div>

  <!-- Footer -->
  <div class="fixed-bottom">
    <Footer />
  </div>

  <!-- <RouterLink to="/">Home</RouterLink> -->
  <!-- <RouterLink to="/test">Test</RouterLink> -->

</template>


<script setup lang="ts">
  
  import { RouterLink, RouterView } from 'vue-router'

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import { ref } from 'vue'

  const search_list = ref([])
  function update_search_list(content) {

    content = content.replace(/,/g, ' ')
    search_list.value = content.split(' ')

    // Remove empty and clean-up.
    search_list.value = search_list.value.filter(item => item)
    search_list.value = search_list.value.map(item => item.toLowerCase().trim())
  }

</script>


<style scoped>

  .main_container {
    margin-bottom: 30px;
  }

</style>
