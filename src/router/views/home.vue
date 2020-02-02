<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'The Home page.' }],
  },
  components: { Layout }
}
</script>

<template>
  <Layout>
    Home
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>

