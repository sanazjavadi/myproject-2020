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
      this.$store.dispatch('signUp', {
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
      <form class="submit">
        <label>ایمیل</label>
        <input v-model="signUp.email" />
        <label>پسورد</label>
        <input v-model="signUp.password" />
        <button class="send self-align-center" @click="submit">ارسال</button>
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
  border-color: lightgray;

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
.send {
  padding: 10px 30px;
  border: 2px solid lightgray;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  font-weight: 900;
}
</style>
