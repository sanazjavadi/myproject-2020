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
        <createButton />
      </div>
      <div>
        <h3>پروژه ها</h3>
      </div>
    </div>

    <section> </section>
  </div>
</template>

<style lang="scss">
@import '@design';

.project {
  width: 90%;
  padding: 30px;
  margin-top: 80px;
  border-bottom: 2px solid lightgrey;
}
</style>
