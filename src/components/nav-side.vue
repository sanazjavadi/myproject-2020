<script>
export default {}
</script>

<template>
  <div>
    <div
      class="sidenav d-flex flex-column flex-wrap align-items-center justify-content-around"
    >
      <div class="comment align-self-end"
        ><img
          src="https://img.icons8.com/material-sharp/24/000000/speech-bubble-with-dots.png"
      /></div>
      <div class="logo"
        ><img
          src="https://www.pngkey.com/png/detail/381-3817253_marvel-app-logo.png"
          alt=""
      /></div>
      <div class="center justify-content-between">
        <div class="menu">
          <ul>
            <li> <a href="#">Projects</a></li>
            <li> <a href="#">Folders</a></li>
            <li> <a href="#">Archives</a></li>
          </ul>
        </div>
        <div class="team pt-5">
          <ul>
            <li> <a href="#">Team</a></li>
            <li><a href="#">Peaple</a></li>
            <li><a href="#">Groups</a></li>
            <li> <a href="#">Settings</a></li>
            <li> <a href="#">SSo</a></li>
            <li class="pt-4"> <a href="#">Help</a></li>
            <li> <a href="#">upgrade</a></li>
          </ul>
        </div>
      </div>

      <div class="profile d-flex  justify-content-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRUIDpGje3cZmYgE9GbW5hZ64PnCfR6XGntb2EoZQsRIHN2_rb"
          alt=""
        />
        <div class="align-self-center">name family</div>
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 230px;
  height: 100%;
  padding-top: 20px;
  padding-right: 20px;
  color: black;
  border-right: 2px solid lightgray;
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
.center {
  height: 60%;
}
.profile img {
  width: 20%;
}
.comment {
  padding: 5px;
  border: 2px solid lightgray;
  border-radius: 50%;
}
</style>
