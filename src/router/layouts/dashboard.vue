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
  data: function() {
    return {
      showNav: true,
    }
  },
  created() {
    window.addEventListener('resize', this.getViewSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.getViewSize)
  },
  methods: {
    show() {
      this.showNav = false
    },
    getViewSize() {
      console.log(window.innerWidth)
      const windowView = window.innerWidth
      // if  screen is mobile
      if (windowView <= 750) {
        this.showNav = false
      } else {
        this.showNav = true
      }
    },
  },
}
</script>

<template>
  <div>
    <div v-if="showNav" class="nav-show"> <navside @show="show"/></div>
    <button v-else class="hamburger-menu" @click="showNav = true">menu</button>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-11 col-sm-11 col-xs-12">
          <section>
            <projects />
          </section>
          <section>
            <Box />
          </section>
          <section>
            <router-view></router-view>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
.hamburger-menu {
  position: absolute;
  right: 50px;
  top: 50px;
  background: inherit;
  outline: none;
  text-decoration: none;
  border: 1px solid lightgray;
  padding: 10px 20px;
  color: gray;
  font-weight: 900;
  border-radius: 30px;
  &:hover {
    color: black;
  }
}
.nav-show {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
