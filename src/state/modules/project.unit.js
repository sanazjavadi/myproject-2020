import * as projectModule from './project'

describe('@state/modules/project', () => {
  it('exports a valid Vuex module', () => {
    expect(projectModule).toBeAVuexModule()
  })
})
