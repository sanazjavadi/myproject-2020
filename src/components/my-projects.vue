<script>
import createButton from '@components/create-button.vue'
export default {
  components: {
    createButton,
  },
}
</script>

<template>
  <div>
    <div class="project d-flex flex-wrap justify-content-between">
      <div>
        <h3>Projects</h3>
      </div>
      <div>
        <createButton />
      </div>
    </div>

    <section> </section>
  </div>
</template>

<style lang="scss">
@import '@design';

.project {
  margin-top: 80px;
  padding: 30px;
  width: 90%;
  border-bottom: 2px solid lightgrey;
}
</style>
