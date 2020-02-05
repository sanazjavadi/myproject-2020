import api from '@src/api/index.js'
export const state = {
  users: []
}

export const getters = {}

export const mutations = {}

export const actions = {

  signUp({
    commit
  }, payload) {
    api.post('/auth/register', {
      email: payload.email,
      password: payload.password
    }).
    then(res => {
        localStorage.setItem('token', res.data.token.accessToken)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
