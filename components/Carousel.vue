<template>

  <div id="carousel_id" class="carousel slide carousel-fade" data-bs-ride="carousel">
    
    <div class="carousel-inner position-relative">
      <div :class="data.class" v-for="data in data_list">
        
        <a :href="'/thumbnails/'+data.file" target="_blank">
          <div class="image" :data-mode="lite_mode"
            :style="{backgroundImage: 'url(/thumbnails/'+data.file+')'}"></div>
        </a>

        <div class="carousel-caption" v-if="data.label != ''">
          <div class="label">{{ data.label }}</div>
          <div class="description">{{ data.description }}</div>
        </div>

        <a class="position-absolute top-0 start-50 translate-middle-x open_image" :href="'/thumbnails/'+data.file" target="_blank" v-if=false>
          <span class="material-icons md-36">fullscreen</span>
        </a>
      </div>
    </div>

    <div class="carousel-indicators position-relative" v-if="image_list.length > 1">
      <template v-for="indicator in indicator_list">
        <div data-bs-target="#carousel_id" v-if="indicator.current"
          :data-bs-slide-to="indicator.index"
          :class="indicator.class"
          :aria-current="indicator.current">
        </div>
        <div data-bs-target="#carousel_id" v-else
          :data-bs-slide-to="indicator.index">
        </div>
      </template>
    </div>
    
    <div class="carousel-control-prev"
      data-bs-target="#carousel_id"
      data-bs-slide="prev"
      v-if="image_list.length > 1">
      <span class="visually-hidden">Prev</span>
      <span class="carousel-control-prev-icon" aria-hidden="false"></span>
    </div>
    
    <div class="carousel-control-next" 
      data-bs-target="#carousel_id" 
      data-bs-slide="next" 
      id="carousel_next_id"
      v-if="image_list.length > 1" >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </div>
    
  </div>
  
</template>


<script setup>

  const props = defineProps({
    
    image_list: {
      type: Array,
      default: []
    },

    label_list: {
      type: Array,
      default: []
    },

    description_list: {
      type: Array,
      default: []
    },

    lite_mode: {
      type: Boolean,
      default: false, 
    }
  })

  // 這些常用的先放著，用不到再移掉吧！
  import { computed } from 'vue'

  const data_list = computed(() => {

    let result_list = []

    if(props.image_list.length == 0) return result_list

    let buffer_dict, label, description;
    props.image_list.forEach((file, index) => {

      buffer_dict = {}
      buffer_dict['file'] = file
      buffer_dict['class'] = 'carousel-item'

      buffer_dict['label'] = (props.label_list.length-1) >= index ? props.label_list[index] : ''
      buffer_dict['description'] = (props.description_list.length-1) >= index ? props.description_list[index] : ''

      result_list.push(buffer_dict)
    })

    // Add active at first item.
    result_list[0].class = result_list[0].class+' active'

    return result_list
  })

  const indicator_list = computed(() => {

    let result_list = []

    if(props.image_list.length == 0) return result_list

    props.image_list.forEach((file, index) => {

      let buffer_dict = {index: index}
      
      // Add active and current at first item.
      if(index == 0) {
        buffer_dict['class'] = 'active'
        buffer_dict['current'] = true
      }

      result_list.push(buffer_dict)
    })

    return result_list
  })

  // Autoplay manually...
  // setTimeout(() => {
    // let next_button = document.getElementById('carousel_next_id')
    // if(next_button) {
      // next_button.click()
      // console.log("Autoplay for carousel in 3 seconds.")
    // }
  // }, "3000");

</script>


<style scoped>

  .carousel-inner {
    min-height: 200px;
  }

  .carousel-caption {
    filter: opacity(70%);
  }

  .carousel-caption:hover {
    filter: opacity(100%);
  }

  .image {
    
    height: 50vh;

    background-color: var(--surface-color);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .image[data-mode=true] {
    min-height: 300px;
    background-size: -1px 300px;
  }

  .label {
    font-size: var(--item-title);
    font-weight: bold;
    color: var(--on-td-color);
    background-color: var(--td-shadow);
  }

  .description {
    font-size: var(--sub-title);
    color: var(--on-td-color);
    background-color: var(--td-shadow);
  }

  .open_image {
    background-color: transparent;
    color: var(--sec-color);
    opacity: 0.3;
    cursor: pointer;
  }

  .carousel-inner:hover .open_image {
    opacity: 1.0;
  }

</style>