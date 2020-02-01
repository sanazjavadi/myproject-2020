<script>
import navside from '@components/nav-side.vue'
import projects from '@components/my-projects.vue'
export default {
  components: {
    navside,
    projects,
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2"><navside /></div>
      <div class="col-md-10">
        <section>
          <projects />
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
