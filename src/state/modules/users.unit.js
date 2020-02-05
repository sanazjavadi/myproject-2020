import * as usersModule from './users'

describe('@state/modules/users', () => {
  it('exports a valid Vuex module', () => {
    expect(usersModule).toBeAVuexModule()
  })
})
