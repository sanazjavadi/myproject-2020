import api from '@src/api/index.js'


export const state = {
  projects: []
}

// const sanaz = {
//   hamid,
//   aysan
// }

// const { aysan } = sanaz

export const getters = {}

export const mutations = {
  getToken(data) {
    state.projects = data
  },
  setProject(name) {
    state.projects.push(name)
  }
}

export const actions = {
  getProject({
    commit
  }) {
    api.get('/pages')
      .then(res => {
        commit('getToken', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  createProjects({
    commit
  }, payload) {
    api.post('/pages', {
        name: payload.name
      })
      .then(res => {
        commit('setProject', payload.name)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
