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
  setProject() {
    state.projects.push()
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
  }) {
    api.post('/pages', {

      })
      .then(res => {
        commit('setProject', )
      })
      .catch(err => {
        console.log(err)
      })
  }
}
