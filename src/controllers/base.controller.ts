export class BaseController {
  constructor() {
    this.logMessage()
  }

  public logMessage() {
    // tslint:disable-next-line: no-console
    console.log('Hello from Base Controller!')
  }
}
