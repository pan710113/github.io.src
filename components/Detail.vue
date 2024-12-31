<template>

  <div class="position-relative" v-if="loading == false">

    <div class="m-1 thumbnail_container">
      <Carousel :image_list="image_list" :label_list="label_list" :description_list="description_list" />
    </div>

    <div class="container detail_item_container">

      <div class="py-1 d-flex flex-wrap justify-content-center software_list">
        <div class="m-1 px-2 rounded-1 software" v-for="software in software_list">
          {{ software }}
        </div>
      </div>

      <div class="row detail_item">
        <div class="col-3 text-end label">Name</div>
        <div class="col-9 fw-bold value">{{ data_dict.name }}</div>
      </div>

      <div class="pb-2 row detail_item">
        <div class="col-3 text-end label">Description</div>
        <div class="col-9 value">{{ data_dict.description }}</div>
      </div>

      <div class="row detail_item" v-if=false>
        <div class="col-3 text-end label">Software</div>
        <div class="col-9 value">{{ data_dict.software }}</div>
      </div>
    
    </div>

  </div>
  
</template>


<script setup lang="ts">

  const props = defineProps({
    
    input_id : {
      type: String,
      default: ""
    }
    
  })

  import Carousel from './Carousel.vue'
  import { ref, computed, watchEffect } from 'vue'

  const loading = ref(false)
  const data_dict = ref({})
  watchEffect(async () => {

    data_dict.value = {}

    if(props.input_id != "") {

      loading.value = true

      // Load json again, update the data_dict.
      let url = '/datas/tool_list.json'
      let tool_list = await (await fetch(url)).json()
      tool_list.forEach((tool_data) => {
        if(tool_data.id == props.input_id) {
          data_dict.value = tool_data
        }
      })
    }

    loading.value = false
  })

  const software_list = computed(() => {

    let result_list = []

    if(data_dict.value.software != undefined) {
      result_list = data_dict.value.software.replace(/,/g, ' ').split(' ')
      result_list = result_list.filter(item => item)
    }

    return result_list
  })

  // Build image_list, label_list, and descript_list from data_dict for Carousel.
  const image_list = computed(() => {

    let result_list = []

    if(data_dict.value.thumbnails != undefined) {

      data_dict.value.thumbnails.forEach((item) => {
        let result = item
        if(typeof(item) == 'object' && item.thumbnail != undefined) {
          result = item.thumbnail
        }
        result_list.push(result)
      })
    }

    return result_list
  })

  const label_list = computed(() => {

    let result_list = []

    if(data_dict.value.thumbnails != undefined) {
      data_dict.value.thumbnails.forEach((item) => {
        if(typeof(item) == 'object' && item.label != undefined) {
          result_list.push(item.label)
        }
      })
    }

    return result_list
  })

  const description_list = computed(() => {

    let result_list = []

    if(data_dict.value.thumbnails != undefined) {
      data_dict.value.thumbnails.forEach((item) => {
        if(typeof(item) == 'object' && item.description != undefined) {
          result_list.push(item.description)
        }
      })
    }

    return result_list
  })
  
</script>


<style scoped>

  .detail_item_container {
    background-color: var(--back-color);
  }

  .detail_item:hover {
/*    background-color: var(--ignore-color);*/
  }

  .detail_item .label {
    color: var(--ignore-color);
  }

  .software {
    color: var(--on-td-color);
    background-color: var(--td-shadow);
  }

</style>