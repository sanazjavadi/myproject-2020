<script>
import createButton from '@components/create-button.vue'

export default {
  components: {
    createButton,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div>
    <div class="project d-flex flex-wrap justify-content-between">
      <div>
        <createButton @click="createProjects" />
      </div>
      <div>
        <h3> {{ store.state.local.Title }}</h3>
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
