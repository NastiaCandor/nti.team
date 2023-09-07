import HeaderView from '../view/header/HeaderView';
import SectionsView from '../view/sections/SectionsView';

export default class App {
  private header: HeaderView;

  private sections: SectionsView;

  constructor() {
    this.header = new HeaderView();
    this.sections = new SectionsView();
  }

  public init(): void {
    this.header.render();
    this.sections.render();
    document.body.append(this.header.getElement(), this.sections.getElement());
  }
}
