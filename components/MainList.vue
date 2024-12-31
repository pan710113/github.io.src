<template>

  <!-- List Container -->
  <div class="d-flex flex-wrap align-items-stretch list_container" v-if="tool_list.length > 0">

    <div class="" v-for="tool in tool_list">

      <ToolItem 
        :id="tool.id"
        :name="tool.name"
        :icon="tool.icon"
        :software="tool.software"
        :label="tool.label"
        @click_tool="item_clicked" />

    </div>

  </div>

  <div class="py-3" v-else>

    <EmptyHint />

  </div>

</template>


<script setup>

  const props = defineProps({
    
    search_list: {
      type: Array,
      default: []
    },

  })

  const emits = defineEmits(['item_clicked'])

  import ToolItem from '../components/ToolItem.vue'
  import EmptyHint from '../components/EmptyHint.vue'
  import { ref, computed, watchEffect } from 'vue'

  const load_list = ref([])
  watchEffect(async () => {

    let url = '/datas/tool_list.json'
    load_list.value = await (await fetch(url)).json()
  })

  const tool_list = computed(() => {

    let result_list = []

    // Filter by search_list first.
    result_list = load_list.value.filter((item) => {
      if(props.search_list.length > 0) {

        let keyword_list = []
        keyword_list = [...keyword_list, ...item.keywords]
        keyword_list = [...keyword_list, ...item.software.replace(/,/g, ' ').split(' ')]
        keyword_list = keyword_list.map(item => item.toLowerCase())

        let keyword_set = new Set(keyword_list)
        let search_set = new Set(props.search_list)
        if(search_set.intersection(keyword_set).size > 0) {
          return item
        }
      } else {
        return item
      }
    })

    result_list.forEach((item) => {

      // Update buffer_dict.
      // let buffer_dict = {}
      // buffer_dict = {...buffer_dict, ...item}
      // result_list.push(buffer_dict)
    })

    return result_list
  })

  function item_clicked(item_id) {

    emits('item_clicked', item_id)
  }

</script>


<style scoped>

  
  
</style>