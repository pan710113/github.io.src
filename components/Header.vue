<template>

  <div class="d-flex justify-content-between p-2 header_container" :data-app="app">
    
    <!-- Title -->
    <div class="d-flex align-items-center">

      <div class="material-icons company_title logo" @click="go_home">local_parking</div>
      <div class="company_title" @click="go_home">
        <span class="px-2">Pan github.io</span>
      </div>
    </div>

    <!-- Search... -->
    <div class="d-flex align-items-center search_container" style="margin-right: 0px;"
      :data-has_value="has_search_content">
      <input class="search_input" @keyup.enter="search_tools" />
      <span class="material-icons search_sign">search</span>
    </div>

  </div>
  
</template>


<script setup lang="ts">

  const props = defineProps({
    
    app: {
      type: String,
      default: ''
    },
  })

  const emits = defineEmits(["update_search_list"])

  import { ref } from 'vue'
  
  const go_home = function() {
    
    location.reload()
    // window.location = '/'
  }

  const has_search_content = ref(false)
  const search_tools = function(event: object) {

    // console.log('SEARCH...')
    // console.log('event.target.value', event.target.value)

    // Update has_search_content.
    has_search_content.value = event.target.value != ""
    emits("update_search_list", event.target.value)
  }

</script>


<style scoped>

  .header_container {
    background-color: var(--surface-color);
    box-shadow: 0 3px 5px rgba(30, 30, 30, 0.5);
  }

  .company_title {
    color: var(--on-back-color);
    cursor: pointer;
  }

  .company_title:hover {
    color: var(--pri-color);
  }

  
  .search_input {
    padding: 3px 5px;
    padding-right: 30px;

    font-size: var(--sub-title);
    color: var(--on-back-color);

    background-color: var(--back-color);
    border: none;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .search_sign {
    margin-left: -25px;
    
    font-size: 1.4rem;
    color: var(--on-surface-color);

    background-color: transparent;
  }

  .search_container[data-has_value=true] .search_input {
    background-color: var(--td-shadow);
  }

  .search_container[data-has_value=true] .search_sign {
    color: var(--on-back-color);
  }


  .header_container[data-app="maya"] {
    background-color: var(--maya-color);
  }

  .header_container[data-app="max"] {
    background-color: var(--max-color);
  }

  .header_container[data-app="after_effects"] {
    background-color: var(--ae-color);
  }

  .header_container[data-app="blender"] {
    background-color: var(--blender-color);
  }


  @media screen and (max-width: 350px) {
    .company_title { 
      display: none; 
    }

    .company_title.logo { 
      display: block; 
    }
  }

</style>