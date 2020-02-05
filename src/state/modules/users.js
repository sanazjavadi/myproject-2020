import api from '@src/api/index.js'
export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {

  signUp({
    commit
  }) {
    api.post('/auth/register', {}).
    then(res => {
        localStorage.setItem('token', res.data.token.accessToken)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
