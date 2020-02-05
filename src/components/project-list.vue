<script>
export default {
  data: function() {
    return {}
  },
  created() {
    this.getProjects()
  },
  methods: {
    getprojects() {
      this.$store.dispatch('getProject')
    },
  },
}
</script>

<template>
  <div>
    <div v-for="(project, index) in getprojects" :key="index">
      {{ project }}
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
