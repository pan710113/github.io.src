<template>

  <main>
    <MainList :search_list="search_list" @item_clicked="item_clicked" />
  </main>

  <!-- Modal popup -->
  <div>
    <!-- Modal trigger button (Do NOT show) -->
    <button type="button" id="show_item_modal_id" 
      style="display: none;"
      data-bs-toggle="modal" 
      data-bs-target="#item_modal_id">Show Modal</button>

    <!-- Modal -->
    <div class="modal fade" id="item_modal_id" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        
        <div class="modal-content">
          <div class="rounded-1 modal_container" v-if="detail_show">
            <Profile v-if="detail_id == 999" />
            <Detail :input_id="detail_id" v-else />
          </div>
        </div>

        <button type="button" id="hide_item_modal_id" 
          style="display: none;"
          data-bs-dismiss="modal">Hide Modal</button>
      </div>
    </div>
  </div>

</template>


<script setup lang="ts">
  
  const props = defineProps({
    
    search_list: {
      type: Array,
      default: []
    },

  })

  import MainList from '../components/MainList.vue'
  import Detail from '../components/Detail.vue'
  import Profile from '../components/Profile.vue'

  import { ref } from 'vue'

  const detail_show = ref(false)
  const detail_id = ref("")
  function item_clicked(data_id) {
    
    // Update detail_show and detail_id.
    detail_show.value = true
    detail_id.value = data_id

    let modal_button = document.getElementById('show_item_modal_id')
    if(modal_button) {
      modal_button.click()  
    }
  }

</script>

<style scoped>

  .test_message {
    color: var(--td-color);
  }

  .modal_container {
    color: var(--on-surface-color);
    background-color: var(--surface-color);
    border: 2px solid var(--td-shadow);
  }

</style>