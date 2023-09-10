import View from '../View';
import BenefitsView from './benefits/BenefitsView';
import CatalogView from './catalog/CatalogView';
import ContactsView from './contacts/ContactsView.1';
import MainView from './main/MainView';
import NewsView from './news/NewsView';
import sectionsParams from './sections-params';

export default class SectionsView extends View {
  private main: MainView;

  private catalog: CatalogView;

  private benefits: BenefitsView;

  private news: NewsView;

  private contacts: ContactsView;

  constructor() {
    super(sectionsParams.main);
    this.main = new MainView();
    this.catalog = new CatalogView();
    this.benefits = new BenefitsView();
    this.news = new NewsView();
    this.contacts = new ContactsView();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    this.element.append(this.main.getElement());
    this.element.append(this.catalog.getElement());
    this.element.append(this.benefits.getElement());
    this.element.append(this.news.getElement());
    this.element.append(this.contacts.getElement());
  }
}
