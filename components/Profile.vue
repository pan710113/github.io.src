<template>

  <div class="position-relative">

    <div class="m-1 container">

      <div class="row row-cols-1 row-cols-sm-2">

        <div class="col col-sm-4">
          <div class="p-2 image_container">
            <img class="profile_image" src="/icons/profile.png" />
          </div>
        </div>

        <div class="col col-sm-8">
          <div class="p-2 text_container">
            <!-- <p>Summary</p> -->
            <p>Designed and developed pipeline tools using Project Management Systems like FPT(ShotGrid), ftrack, and TACTIC.</p>
            <p>Designed and developed production tools utilizing Maya, 3ds Max, After Effects, Blender, Nuke, and Houdini.</p>
            <p>Designed and developed a full-stack web service using FastAPI for the backend, and Vue.js for the frontend.</p>
            <p>Supported Render Farm Systems like Deadline.</p>
            <p>Production support and troubleshooting.</p>
          </div>
        </div>

      </div>

    </div>

    <div class="py-2 container detail_item_container">

      <div class="py-1 row detail_item">
        <div class="col-3 text-end label">Name</div>
        <div class="col-9 fw-bold value">潘宜蚉 Pan.pan (Mosquito Pan)</div>
      </div>

      <div class="py-1 row detail_item">
        <div class="col-3 text-end label">Mail</div>
        <div class="col-9 value">pan710113@gmail.com</div>
      </div>

      <div class="py-1 row detail_item">
        <div class="col-3 text-end label">Birthday</div>
        <div class="col-9 value">Jan 13, 1982</div>
      </div>

      <div class="py-1 row detail_item">
        <div class="col-3 text-end label">Education</div>
        <div class="col-9 value">
          <div>National Kaohsiung University of Science and Technology, Kaohsiung, Taiwan</div>
          <div>Master of Computer and Communication Engineering, 2006</div>
        </div>
      </div>

    </div>

  </div>
  
</template>


<script setup lang="ts">

  
  
</script>


<style scoped>

  .detail_item_container {
    background-color: var(--back-color);
  }

  .detail_item .label {
    display: block;
    color: var(--ignore-color);
  }

  .image_container {
    text-align: center;
  }

  .profile_image {
    max-width: 100%;
    height: auto;
  }

</style>