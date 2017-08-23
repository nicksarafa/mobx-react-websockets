import { observable } from 'mobx'

class ExampleStore {
  @observable isThisWorking = false
}

export { ExampleStore }