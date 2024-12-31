<template>

  <div class="container-fluid footer_container" :data-app="app">
    <div class="p-1 row align-items-center">

      <div class="col footer_info">
        <span>© 2024 Pan.</span>
      </div>

      <div class="col footer_info app" v-if="app">
        <span>{{ app }}</span>
      </div>

    </div>
  </div>
  
</template>


<script setup lang="ts">

  const props = defineProps({
    
    app: {
      type: String,
      default: ''
    }
  })

  // 這些常用的先放著，用不到再移掉吧！
  // import { ref, watchEffect, computed } from 'vue'
  // import { convertTitleCase } from '../lib.js'

</script>


<style scoped>

  .footer_container {
    color: var(--on-surface-color);
    background-color: var(--surface-color);
    box-shadow: 0 -3px 5px rgba(30, 30, 30, 0.5);
  }

  .footer_info {
    overflow: hidden;
    position: relative;
    font-size: var(--sub-title);
    font-weight: bold;
    font-family: calibri, "Microsoft JhengHei", "微軟正黑體";
    text-align: center;
  }

  .footer_container[data-app="maya"] {
    background-color: var(--maya-color);
  }

  .footer_container[data-app="max"] {
    background-color: var(--max-color);
  }

  .footer_container[data-app="after_effects"] {
    color: var(--on-ae-color);
    background-color: var(--ae-color);
  }

  .footer_container[data-app="blender"] {
    color: var(--back-color);
    background-color: var(--blender-color);
  }

  @media screen and (max-width: 380px) {
    .footer_info { 
      display: none; 
    }

    .footer_info.app { 
      display: block; 
    }
  }
  
</style>