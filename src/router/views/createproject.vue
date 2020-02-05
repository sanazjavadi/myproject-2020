<script>
import createButton from '@components/create-button.vue'

export default {
  components: {
    createButton,
  },
  data: function() {
    return {
      newProject: {
        name: '',
        details: '',
      },
    }
  },
  methods: {
    createProjects() {
      this.$store.dispatch('createProject', {
        name: this.newProject.name,
      })
    },
  },
}
</script>

<template>
  <div class="form container-fluid">
    <router-link to="/dashboard">
      <span class="closing">&times;</span></router-link
    >
    <div class="row justify-content-center">
      <div class="col-md-4 ">
        <div class="header">
          <h3>ایجاد پروژه جدید</h3>
        </div>
        <form class="create">
          <label>نام پروژه</label>
          <input v-model="newProject.name" type="text" />
          <label>موضوع پروژه</label>
          <input v-mode="newProject.details" />
          <createButton @click="createProjects" />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
.closing {
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 900;
  border: 2px solid #8633fc;
  border-radius: 100%;
}
.form {
  margin: 10% auto;
  text-align: right;
}
.header {
  display: block;
  padding: 20px 10px;
  color: #8633fc;
  border-bottom: 2px solid #8633fc;
}
.create {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 10px;
}
input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 70px;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input {
  padding: 10px;
  border-color: #ffbe1d;
  border-style: solid;
  border-width: 2px;

  &:focus {
    border-color: gray;
  }

  &::placeholder {
    color: gray;
  }
}
label {
  display: block;
  padding: 10px;
  margin-bottom: 0.25em;
  font-size: 18px;
  font-weight: 900;
}
</style>
