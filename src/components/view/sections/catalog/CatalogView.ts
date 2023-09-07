import { CatalogItemType } from '../../../../types';
import ButtonCreator from '../../../utils/ButtonCreator';
import ElementCreator from '../../../utils/ElementCreator';
import View from '../../View';
import { catalogParams, CATALOG_ITEMS, FIRST_CATALOG_ITEM } from './catalog-params';

export default class CatalogView extends View {
  constructor() {
    super(catalogParams.section);
    this.render();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(catalogParams.wrapper);
    this.element.setAttribute('id', 'catalog');
    this.injectCategoryContainer(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectCategoryContainer(wrapper: ElementCreator): void {
    const catalog = new ElementCreator(catalogParams.catalog.container);
    catalog.addInnerElement(this.getFirstCatalogItem());
    CATALOG_ITEMS.forEach((elem) => {
      catalog.addInnerElement(this.getCatalogItem(elem));
    });

    wrapper.addInnerElement(catalog);
  }

  private getFirstCatalogItem(): ElementCreator {
    const item = new ElementCreator(catalogParams.catalog.item);
    const title = new ElementCreator(catalogParams.catalog.title);
    title.setTextContent(FIRST_CATALOG_ITEM.title);
    const subtitle = new ElementCreator(catalogParams.catalog.subtitle);
    subtitle.setTextContent(FIRST_CATALOG_ITEM.subtitle);
    const btn = new ButtonCreator(FIRST_CATALOG_ITEM.btnText);
    item.addInnerElement([title, subtitle, btn]);
    return item;
  }

  private getCatalogItem(data: CatalogItemType) {
    const item = new ElementCreator(catalogParams.catalog.item);
    const title = new ElementCreator(catalogParams.catalog.title);
    title.setTextContent(data.name);
    const subtitle = new ElementCreator(catalogParams.catalog.subtitle);
    subtitle.setTextContent(data.quantity);
    const idText = new ElementCreator(catalogParams.catalog.id);
    idText.setTextContent(data.id);
    const imgContainer = new ElementCreator(catalogParams.catalog.imgContainer);
    const img = new ElementCreator(catalogParams.catalog.img);
    img.setImageLink(data.imgSRC, data.imgAlt);
    imgContainer.addInnerElement(img);
    item.addInnerElement([idText, imgContainer, subtitle, title]);
    return item;
  }
}
