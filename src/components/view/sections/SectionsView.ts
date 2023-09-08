// import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import BenefitsView from './benefits/BenefitsView';
import CatalogView from './catalog/CatalogView';
import MainView from './main/MainView';
import sectionsParams from './sections-params';

export default class SectionsView extends View {
  private main: MainView;

  private catalog: CatalogView;

  private benefits: BenefitsView;

  constructor() {
    super(sectionsParams.main);
    this.main = new MainView();
    this.catalog = new CatalogView();
    this.benefits = new BenefitsView();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    this.element.append(this.main.getElement());
    this.element.append(this.catalog.getElement());
    this.element.append(this.benefits.getElement());
  }
}
