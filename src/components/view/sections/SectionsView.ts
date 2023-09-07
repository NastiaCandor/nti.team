// import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import MainView from './main/MainView';
import sectionsParams from './sections-params';

export default class SectionsView extends View {
  private main: MainView;

  constructor() {
    super(sectionsParams.main);
    this.main = new MainView();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    this.main.render();
    this.element.append(this.main.getElement());
    // const wrapper = new ElementCreator(headerParams.wrapper);
    // this.injectLogo(wrapper);
    // this.injectNavigation(wrapper);
    // this.injectSearch(wrapper);
    // this.injectUserIcons(wrapper);
    // this.element.append(wrapper.getElement());
  }

  // private injectLogo(wrapper: ElementCreator): void {
  //   const logo = new ElementCreator(headerParams.logo);
  //   wrapper.addInnerElement(logo);
  // }
}
