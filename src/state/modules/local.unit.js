import * as localModule from './local'

describe('@state/modules/local', () => {
  it('exports a valid Vuex module', () => {
    expect(localModule).toBeAVuexModule()
  })
})
