<script>
import navside from '@components/nav-side.vue'
export default {
  components: {
    navside,
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="col-md-2"><navside /></div>
    <div class="col-md-10"></div>
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
