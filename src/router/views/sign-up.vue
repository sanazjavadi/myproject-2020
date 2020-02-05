<script>
export default {
  page: {
    title: 'Sign Up',
    meta: [{ name: 'description', content: 'The Sign Up page.' }],
  },
  data() {
    return {
      signUp: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    submit() {
      console.log(this.$store)
      this.$store.dispatch('users/signUp', {
        email: this.signUp.email,
        password: this.signUp.password,
      })
    },
  },
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-4 form ">
      <div class="header">
        <h3>ثبت نام</h3>
      </div>
      <form class="submit" @submit.prevent="submit">
        <label>ایمیل</label>
        <input v-model="signUp.email" />
        <label>پسورد</label>
        <input v-model="signUp.password" />
        <input value="ارسال" type="submit" class="send self-align-center" />
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';

.form {
  margin: 10% auto;
  text-align: right;
}
.header {
  display: block;
  padding: 20px 10px;
  border-bottom: 2px solid lightgray;
}
.submit {
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
  border-color: lightgray;
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
.send {
  padding: 10px 30px;
  font-weight: 900;
  cursor: pointer;
  border: 2px solid lightgray;
  border-radius: 30px;
  outline: none;
}
</style>
