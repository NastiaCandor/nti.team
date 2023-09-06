import HeaderView from '../view/header/HeaderView';

export default class App {
  header: HeaderView;

  constructor() {
    this.header = new HeaderView();
  }

  public init(): void {
    this.header.render();
    document.body.append(this.header.getElement());
  }
}
