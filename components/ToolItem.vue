<template>

  <div class="position-relative">

    <div class="d-flex flex-column align-items-center position-relative tool" 
      :title="description"
      :data-software="software" 
      :data-enable="enable" 
      :data-tool_id="id" 
      :data-icon_only="icon_only"
      @click.stop="click_command">

      <!-- Tool Icon -->
      <div class="position-relative icon"
        :data-dev="dev" 
        v-bind:style="{'background-image': 'url(/icons/'+icon+')'}">
            
        <!-- Ribbon of dev (TD) -->
        <div class="ribbon_dev" v-if="dev">
          <div>TD</div>
        </div>

        <!-- Ribbon of project -->
        <div class="ribbon_label" :data-label="label" v-if="label">
          {{ label }}
        </div>

        <!-- new 符號 -->
        <div class="sign_new" 
          v-if="true && enable == true && new_arrival == true">
          <span class="material-icons">fiber_new</span>
        </div>

        <!-- option 符號 -->
        <div class="option_button" 
          v-if="enable == true && false"
          title="More detail...">
          <span class="material-icons sign_option" @click.stop="option_command">feed</span>
        </div>

        <!-- Count -->
        <div class="no_events count" v-if="count != 0">
          {{ count }}
        </div>

      </div>

      <!-- Tool Name -->
      <div class="name py-2 no_events" v-if="icon_only == false">{{ name }}</div>

    </div>

    <!-- disable 符號 -->
    <div class="position-absolute top-50 start-50 translate-middle no_events sign_disable" 
      v-if="enable == false">
      <!-- 可參考: lock, edit_document,  -->
      <span class="material-icons md-48">block</span>
    </div>

    <div class="ribbon_new" v-if="false && enable == true && new_arrival == true">New</div>

  </div>
  
</template>


<script setup lang="ts">

  const props = defineProps({
    
    id: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: 'td.png'
    },

    name: {
      type: String,
      default: 'UNTITLED'
    },

    description: {
      type: String,
      default: ''
    },

    software: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    count: {
      type: Number,
      default: 0
    },


    new_arrival: {
      type: Boolean,
      default: false
    },

    dev: {
      type: Boolean,
      default: false
    },

    enable: {
      type: Boolean,
      default: true
    },

    icon_only: {
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmits(['click_tool'])

  function click_command() {
    emits("click_tool", props.id)
  }
  
</script>


<style scoped>

  .tool {
    margin: 5px 10px;
    padding: 5px;
    width: 100px;

/*    padding-top: 10px;*/
/*    border-top: 2px solid var(--on-surface-color);*/
/*    border-radius: 20%;*/
    cursor: pointer;
  }

  .tool[data-enable=false] {
    opacity: 0.7;
    filter: grayscale(100%);
    pointer-events: none;
  }

  .tool[data-icon_only=true] {
    margin: 3px;
    padding: 3px;
    width: unset;
  }

  .name {
/*    font-size: 1rem;*/
    font-weight: bold;
    line-height: 1rem;
    text-align: center;
    white-space: pre-wrap;

    color: var(--on-surface-color);
  }

  .icon {
    width: 64px;
    height: 64px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border-radius: 3px;
    opacity: 0.8;
  }

  .icon[data-dev=true] {
    background-color: var(--td-shadow);
  }

  .tool:hover .option_button > .sign_option {
    left: 0px;
  }

  .tool:hover .name {
    color: var(--on-back-color);
    text-shadow: 0 0 5px var(--ignore-color);
  }

  .tool:hover .icon {
    opacity: 1.0;
    filter: drop-shadow(0 0 10px var(--ignore-color));
  }

  .tool[data-software="maya"]:hover .name {
    text-shadow: 0 0 5px var(--maya-color);
  }

  .tool[data-software="maya"]:hover .icon {
    filter: drop-shadow(0 0 10px var(--maya-color));
  }

  .tool[data-software="max"]:hover .name {
    text-shadow: 0 0 5px var(--max-color);
  }

  .tool[data-software="max"]:hover .icon {
    filter: drop-shadow(0 0 10px var(--max-color));
  }

  .tool[data-software="after_effects"]:hover .name {
    text-shadow: 0 0 5px var(--ae-color);
  }

  .tool[data-software="after_effects"]:hover .icon {
    filter: drop-shadow(0 0 10px var(--ae-color));
  }

  .tool[data-software="blender"]:hover .name {
    text-shadow: 0 0 5px var(--blender-color);
  }
  
  .tool[data-software="blender"]:hover .icon {
    filter: drop-shadow(0 0 10px var(--blender-color));
  }


  .count {
    position: absolute;
    top: -5px;
    right: -15px;
    margin: 0;
    padding: 2px 3px;
    min-width: 20px;

    font-size: var(--sub-title);
    font-weight: bold;
/*    font-family: monospace;*/
    text-align: center;
    line-height: var(--sub-title);
    color: var(--on-back-color);
    background-color: var(--error-color);
    border-radius: 3px;
    opacity: 0.9;
  }

  .sign_disable {
    color: var(--error-color);
    opacity: 0.9;
  }

  .sign_new {
    position: absolute;
    top: -10px;
    right: -10px;
    margin: 0;
    padding: 0;
    
    color: var(--hint-color);
    animation: blink-animation 2s steps(1) infinite;
    pointer-events: none;
  }

  @keyframes blink-animation {
    50% {
      color: transparent;
    }
  }

  .no_events {
    pointer-events: none;
  }

  .option_button {
    position: absolute;
    top: -10px;
    left: -10px;
    margin: 0;
    padding: 0;

    height: 30px;
    width: 30px;

    overflow: hidden;
  }

  .option_button > .sign_option {
    position: absolute;
    top: 0px;
    left: -35px;
    transition: left 1s ease 1s;
    padding: 0px;

    font-size: var(--title);
    color: var(--on-surface-color);
    text-shadow: 1px 1px 3px var(--surface-color);
  }

  .sign_option:hover {
    color: var(--on-back-color);
  }


  .ribbon_label {
    position: absolute;
    bottom: -5px;
    left: -5px;
    padding: 0px 5px;

    font-weight: bold;
    color: var(--on-back-color);
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: none;
  }

  .ribbon_label[data-label="SL"] { color: #FFAC00 } 

  
  .ribbon_dev {
    position: absolute;
    top: -3px;
    left: -3px;
    width: 56px;
    height: 50px;
    overflow: hidden;
  }

  .ribbon_dev > div {
    transform: rotate(45deg);
    position: relative;
    top: 5px;
    left: 11px;
    width: 61px;
    padding: 0;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5px;
    color: var(--on-td-color);
    background-color: var(--td-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  }

  .ribbon_dev > div:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    border-top: 3px solid var(--td-shadow);
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }

  .ribbon_dev > div:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -3px;
    border-top: 3px solid var(--td-shadow);
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }


  .ribbon_new {
    transform: rotate(-5deg);
    position: absolute;
    bottom: 15px;
    right: 5px;
    color: #FAFAFA;
    font-size: 12px;
/*    font-weight: bold;*/
    font-family: calibri;
    line-height: 0px;
  }

  .ribbon_new:after {
    content: "";
    position: absolute;
    top: -5px;
    left: -4px;
    border-width: 7px 15px 7px 15px;
    border-style: solid;
    border-color: #F44336 #F44336 #F44336 #F44336;
    z-index: -1;
  }

  .ribbon_new:before {
    content: "";
    position: absolute;
    top: -6px;
    left: -10px;
    border-width: 0px 0px 12px 6px;
    border-style: solid;
    border-color: transparent transparent #B71C1C transparent;
    z-index: -1;
  }

</style>