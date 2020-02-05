<script>
export default {
  data() {},
  methods: {
    close() {
      this.$emit('show')
    },
    changeTitle(selectedTitle) {
      this.$store.commit('changeTitle', {
        Title: selectedTitle,
      })
    },
  },
}
</script>

<template>
  <div>
    <div
      class="sidenav d-flex flex-column  align-items-center justify-content-around"
    >
      <span class="close" @click="close">&times;</span>
      <div class="comment align-self-end"
        ><img
          src="https://img.icons8.com/material-sharp/24/000000/speech-bubble-with-dots.png"
      /></div>
      <div class="logo pt-5 mt-5"
        ><img
          src="https://www.pngkey.com/png/detail/381-3817253_marvel-app-logo.png"
          alt=""
      /></div>
      <div class="center justify-content-between mt-5 mt-5">
        <div class="menu">
          <ul>
            <li>
              <router-link to="/dashboard" @click="changeTitle('پروژه ها')"
                >پروژه ها</router-link
              >
            </li>
            <li>
              <router-link
                to="/dashboard/folders"
                @click="changeTitle('فولدرها ')"
                >فولدرها</router-link
              ></li
            >
            <li>
              <router-link
                to="/dashboard/archive"
                @click="changeTitle('آرشیو ')"
                >آرشیو</router-link
              ></li
            >
          </ul>
        </div>
        <div class="team pt-5">
          <ul>
            <li><router-link to="/dashboard/team">تیم</router-link></li>
            <li><a href="#">مردم</a></li>
            <li><a href="#">گروه ها</a></li>
            <li> <a href="#">تنظیمات</a></li>
            <li> <a href="#">SSo</a></li>
            <li class="pt-4"> <a href="#">Help</a></li>
            <li> <a href="#">upgrade</a></li>
          </ul>
        </div>
      </div>

      <div class="profile d-flex  justify-content-center pt-5 mt-5">
        <div class="align-self-center">نام و نام خانوادگی</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRUIDpGje3cZmYgE9GbW5hZ64PnCfR6XGntb2EoZQsRIHN2_rb"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
* {
  padding: 0;
  margin: 0;
}
.sidenav {
  z-index: 1;
  width: 230px;
  height: 100vh;
  padding-top: 20px;
  padding-right: 20px;
  color: black;
  text-align: right;
  border-left: 2px solid lightgray;
}
ul {
  list-style: none;
}

ul li {
  padding: 5px;
}
a {
  color: black !important;
  text-decoration: none;
}
a:hover {
  color: lightgray;
  text-decoration: none;
}
a:active {
  color: lightseagreen;
}

img {
  max-width: 100%;
  height: auto;
}
.logo {
  width: 50%;
}

.profile img {
  width: 20%;
  background-color: inherit;
}
.profile {
  margin-top: 500px;
}
.comment {
  padding: 5px;
  border: 2px solid lightgray;
  border-radius: 50%;
}
.close {
  position: absolute;
  top: 5px;
  left: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
}
</style>
