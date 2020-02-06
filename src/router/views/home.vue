<script>
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'The Home page.' }],
  },
}
</script>

<template>
  <div class="container-fluid">
    <!-- hero section -->
    <section class="hero">
      <div class="hero-img">
        <img
          src="https://bejamas.io/static/00eb1c87b8dcfb7043f15c06c226a5d2/eb21c/hero-opt.webp"
          alt=""
        />
      </div>
      <div class="hero-text">
        <h1>Solve design problems, together</h1>
        <p>
          Marvel has everything you need to bring ideas to life and transform
          how you create digital products with your team. Placing the power of
          design in everyone’s hands.</p
        >
      </div>
    </section>
    <!-- middle section -->
    <div class="circle-img">
      <img
        src="https://bejamas.io/static/d029ebb344c5015d78d2ff327ad06063/1fe9e/30.webp"
        alt=""
      />
    </div>
    <div class="bubble">
      <img
        src="https://bejamas.io/static/121ebe8d50a6303b5cea58d48ac19bee/e183d/9.webp"
        alt=""
      />
    </div>
    <div class="bubble-two">
      <img
        src="https://bejamas.io/static/3f2cd96dab882711b28204fa22dcdf41/578e8/6.webp"
        alt=""
      />
    </div>
    <section class="middle-section">
      <div class="inner">
        <h3>
          We see things differently
        </h3>

        <button class="ml-5">sign up</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
*,
body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container-fluid {
  padding-left: 0 !important;
}
.hero {
  background-color: #472544;
  width: 100vw;
  display: flex;
  padding-top: 20px;
}
.hero-text {
  width: 40vw;
  text-align: center;
  color: white;
  padding: 130px 40px;
  margin-right: 250px;
}
.hero-text h1 {
  color: white;
}
.hero-text p {
  padding: 50px;
  font-size: 18px;
  font-weight: 900;
}
.hero-img {
  width: 60vw;
  padding-left: 120px;
}
.middle-section {
  background-color: #834465;
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow-x: hidden;
}
.middle-section h3 {
  color: white;
}
.middle-section button {
  background-color: #834465;
  border: 2px solid lightgray;
  color: white;
  padding: 20px 80px;
  justify-content: center;
  margin-top: 30px;
}
.circle-img {
  position: absolute;
  left: 20%;
}
.bubble {
  position: absolute;
  right: 10%;
}
.bubble-two {
  position: absolute;
  right: 30%;
}
</style>
