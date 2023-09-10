import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import { dropMenu, headerParams, NAVIGATION_LINKS, USER_ICONS_TYPES, USER_MENU_LIST, USER_NAME } from './header-params';

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
    // this.injectDropDownMenu(wrapper);
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
    // const user = block.getChildren()[0];
    this.injectDropDownMenu(block.getChildren()[0]);
    wrapper.addInnerElement(block);
  }

  private injectDropDownMenu(wrapper: Element): void {
    const block = new ElementCreator(dropMenu.wrapper);
    const container = new ElementCreator(dropMenu.container);
    const personalContainer = new ElementCreator(dropMenu.personal.container);
    const icon = new ElementCreator(dropMenu.personal.userIcon);
    const name = new ElementCreator(dropMenu.personal.userName);
    name.setTextContent(USER_NAME);
    personalContainer.addInnerElement([icon, name]);
    const list = this.getDropMenuList();

    container.addInnerElement([personalContainer, list]);
    block.addInnerElement(container);
    wrapper.append(block.getElement());
  }

  private getDropMenuList(): ElementCreator {
    const list = new ElementCreator(dropMenu.menu.list);
    USER_MENU_LIST.forEach((elem) => {
      const item = new ElementCreator(dropMenu.menu.item);
      const link = new ElementCreator(dropMenu.menu.link);
      link.setAttribute('href', elem.link);
      link.setTextContent(elem.title);
      item.addInnerElement(link);
      list.addInnerElement(item);
    });
    return list;
  }
}
