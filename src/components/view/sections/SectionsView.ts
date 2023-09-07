// import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import CatalogView from './catalog/CatalogView';
import MainView from './main/MainView';
import sectionsParams from './sections-params';

export default class SectionsView extends View {
  private main: MainView;

  private catalog: CatalogView;

  constructor() {
    super(sectionsParams.main);
    this.main = new MainView();
    this.catalog = new CatalogView();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    this.element.append(this.main.getElement());
    this.element.append(this.catalog.getElement());
  }
}
