<script>
export default {}
</script>

<template>
  <div>
    <div class="box d-flex  justify-content-between">
      <div class="leftBox d-flex flex-wrap justify-content-around">
        <a href="#">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/search.png" />
        </a>
        <a href="#">My projects</a>
        <a href="#">Team</a>
      </div>
      <div class="rightBox  d-flex flex-wrap justify-content-around">
        <img src="https://img.icons8.com/material/24/000000/list--v1.png" />
        <img
          src="https://img.icons8.com/material-sharp/24/000000/small-icons.png"
        />
        <select id="" name="last Updated">
          <option value="">last Updated</option>
          <option value="">last Updated</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
.box {
  padding: 30px 0;
  width: 90%;
}
.leftBox {
  width: 15%;
  justify-content: space-between;
}
.leftBox img {
  width: 100%;
  height: auto;
}
.rightBox {
  width: 15%;
  justify-content: space-between;
}
select {
  text-decoration: none;
  outline: none;
  border: none;
  background-color: inherit;
}
</style>
