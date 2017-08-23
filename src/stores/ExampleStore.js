import { extendObservable } from 'mobx'

class ExampleStore {
  constructor() {
    extendObservable(this, {
      isThisExampleWorking: false,
    })
  }

  _toggleIsExampleWorking() {
    this.isThisExampleWorking = !this.isThisExampleWorking
    console.log('isThisExampleWorking', this.isThisExampleWorking)
  }
}

export { ExampleStore }
