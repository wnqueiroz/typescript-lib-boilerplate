import mockConsole from 'jest-mock-console'

import { BaseController } from '../../../src/controllers'

describe('Unit: BaseController', () => {
  let baseController: BaseController

  let restoreConsole: any

  beforeEach(() => {
    restoreConsole = mockConsole('log')

    baseController = new BaseController()
  })

  afterEach(() => {
    restoreConsole()
  })

  describe('logMessage', () => {
    it('should call console.log when the function is invoked', () => {
      baseController.logMessage()
      // tslint:disable-next-line:no-console
      expect(console.log).toBeCalledWith('Hello from Base Controller!')
    })
  })
})
