<script>
import navside from '@components/nav-side.vue'
import projects from '@components/my-projects.vue'
import Box from '@components/panel-box.vue'
export default {
  components: {
    navside,
    projects,
    Box,
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 col-sm-2 col-xs-12"><navside /></div>
      <div class="col-md-10 col-sm-10 col-xs-12">
        <section>
          <projects />
        </section>
        <section>
          <Box />
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
