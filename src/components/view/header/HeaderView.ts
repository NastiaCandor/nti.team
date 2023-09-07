import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import { headerParams, NAVIGATION_LINKS, USER_ICONS_TYPES } from './header-params';

export default class HeaderView extends View {
  constructor() {
    super(headerParams.header);
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(headerParams.wrapper);
    this.injectLogo(wrapper);
    this.injectNavigation(wrapper);
    this.injectSearch(wrapper);
    this.injectUserIcons(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectLogo(wrapper: ElementCreator): void {
    const logo = new ElementCreator(headerParams.logo);
    logo.setAttribute('href', '#main');
    wrapper.addInnerElement(logo);
  }

  private injectNavigation(wrapper: ElementCreator): void {
    const menuBg = new ElementCreator(headerParams.menuBg);
    const nav = new ElementCreator(headerParams.nav);
    const list = new ElementCreator(headerParams.navList);
    console.log();
    NAVIGATION_LINKS.forEach((element) => {
      const item = new ElementCreator(headerParams.navItem);
      const link = new ElementCreator(headerParams.navLink);
      link.setAttribute('href', element.link);
      link.setTextContent(element.title);
      item.addInnerElement(link);
      list.addInnerElement(item);
    });
    nav.addInnerElement(list);
    menuBg.addInnerElement(nav);

    wrapper.addInnerElement(menuBg);
  }

  private injectSearch(wrapper: ElementCreator): void {
    const searchBlock = new ElementCreator(headerParams.searchBlock);
    const search = new ElementCreator(headerParams.searchIcon);
    searchBlock.addInnerElement(search);
    wrapper.addInnerElement(searchBlock);
  }

  private injectUserIcons(wrapper: ElementCreator): void {
    const block = new ElementCreator(headerParams.userIconsBlock);
    USER_ICONS_TYPES.forEach((cssClass) => {
      const icon = new ElementCreator(headerParams.userIcon);
      if (cssClass === 'shopping-bag') icon.addInnerElement(new ElementCreator(headerParams.notification));
      icon.setCssClasses([`user__icon_${cssClass}`]);
      block.addInnerElement(icon);
    });
    wrapper.addInnerElement(block);
  }
}
