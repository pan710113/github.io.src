<template>

  <div class="no_item_hint">
    <div class="face_icon">{{ get_face_icon() }}</div>
    <div class="message">{{ message }}</div>
    <div class="sub_message">{{ sub_message }}</div>
  </div>
  
</template>


<script setup>

  const props = defineProps({
    
    message: {
      type: String,
      default: 'Nothing Found.'
    },

    sub_message: {
      type: String,
      default: 'Sorry, I could NOT find anything for you.'
    }
  })

  import { ref } from 'vue'
  
  // const sorry_icon_index = ref(0)
  let icon_list = []
  icon_list.push('<(_ _)>')
  icon_list.push('(◞‸◟)')
  icon_list.push('(｡ŏ_ŏ)')
  icon_list.push('(°ﾛ°٥)')
  icon_list.push('(〒︿〒)')

  // Update sorry_icon_index.
  // sorry_icon_index.value = random_number(0, icon_list.length)
  const random_number = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const get_face_icon = function() {
    return icon_list[random_number(0, icon_list.length)]
  }

</script>


<style scoped>

  .no_item_hint {
    color: var(--hint-color);
  }

  .face_icon {
    font-size: 4rem;
    text-align: center;
    color: var(--on-back-color);
  }

  .message {
    font-size: var(--item-title);
    font-weight: bold;
    text-align: center;
  }

  .sub_message {
    font-size: var(--sub-title);
    text-align: center;
    color: var(--ignore-color);
  }

</style>