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
  border: 2px solid #8633fc;
  padding: 10px 15px;
  top: 30px;
  right: 30px;
  font-weight: 900;
  font-size: 18px;
  border-radius: 100%;
}
.form {
  margin: 10% auto;
  text-align: right;
}
.header {
  color: #8633fc;
  display: block;
  padding: 20px 10px;
  border-bottom: 2px solid #8633fc;
}
.create {
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 20px;
}
input {
  padding: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #ffbe1d;

  &:focus {
    border-color: gray;
  }

  &::placeholder {
    color: gray;
  }
}
label {
  display: block;
  margin-bottom: 0.25em;
  padding: 10px;
  font-size: 18px;
  font-weight: 900;
}
</style>
