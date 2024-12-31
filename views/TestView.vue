<template>
  
  <div class="test_container">

    <button @click="test_clicked">test</button>

  </div>

  <!-- Modal popup -->
  <div>
    <!-- Modal trigger button (Do NOT show) -->
    <button type="button" id="show_item_modal_id" 
      style="display: none;"
      data-bs-toggle="modal" 
      data-bs-target="#item_modal_id">Show Modal</button>

    <!-- Modal -->
    <div class="modal fade" id="item_modal_id" tabindex="-1">
      <div class="modal-dialog modal-xl">
        
        <div class="modal-content">
          <div class="rounded-1 modal_container" v-if="test_show">
            <Profile />
          </div>
        </div>

        <button type="button" id="hide_item_modal_id" 
          style="display: none;"
          data-bs-dismiss="modal">Hide Modal</button>
      </div>
    </div>
  </div>

</template>


<script setup>

  const props = defineProps({
    
    search_list: {
      type: Array,
      default: []
    },

  })
  
  import Profile from '../components/Profile.vue'

  import { ref } from 'vue'

  const test_show = ref(false)
  function test_clicked() {
    
    test_show.value = true
    
    let modal_button = document.getElementById('show_item_modal_id')
    if(modal_button) {
      modal_button.click()  
    }
  }

</script>


<style scoped>

  .modal_container {
    color: var(--on-surface-color);
    background-color: var(--surface-color);
    border: 2px solid var(--td-shadow);
  }

</style>
