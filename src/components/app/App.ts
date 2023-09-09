import FooterView from '../view/footer/FooterView';
import HeaderView from '../view/header/HeaderView';
import SectionsView from '../view/sections/SectionsView';

export default class App {
  private header: HeaderView;

  private sections: SectionsView;

  private footer: FooterView;

  constructor() {
    this.header = new HeaderView();
    this.sections = new SectionsView();
    this.footer = new FooterView();
  }

  public init(): void {
    this.header.render();
    this.sections.render();
    this.footer.render();
    document.body.append(this.header.getElement(), this.sections.getElement(), this.footer.getElement());
  }
}
