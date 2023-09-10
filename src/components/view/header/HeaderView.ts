/* eslint-disable prefer-destructuring */
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
    const hamburger = this.injectNavigation(wrapper);
    this.injectSearch(wrapper);
    this.injectUserIcons(wrapper);
    wrapper.addInnerElement(hamburger);
    this.element.append(wrapper.getElement());
  }

  private injectLogo(wrapper: ElementCreator): void {
    const logo = new ElementCreator(headerParams.logo);
    logo.setAttribute('href', '#main');
    wrapper.addInnerElement(logo);
  }

  private injectNavigation(wrapper: ElementCreator) {
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
    const hamburger = this.injectHamburgerMenu(wrapper, menuBg, nav);

    wrapper.addInnerElement(menuBg);
    return hamburger;
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

  private injectHamburgerMenu(wrapper: ElementCreator, menuBg: ElementCreator, nav: ElementCreator) {
    const icon = new ElementCreator(headerParams.userIcon);
    icon.setCssClasses(['hamburger__wrapper']);
    const hamuberger = new ElementCreator(headerParams.hamburger);
    const hamburgerLine = new ElementCreator(headerParams.hamburgerLine);
    hamuberger.addInnerElement(hamburgerLine);

    icon.getElement().addEventListener('click', () => {
      this.toggleHamburgerClasses(hamuberger, menuBg, nav);
    });
    menuBg.getElement().addEventListener('click', (event: Event) => {
      const target = event.target;
      if (!target) return;
      if (
        // eslint-disable-next-line operator-linebreak
        (<HTMLElement>target).closest('.header__navigation') == null ||
        (<HTMLElement>target).closest('.navigation')
      ) {
        this.toggleHamburgerClasses(hamuberger, menuBg, nav);
      }
    });
    icon.addInnerElement(hamuberger);
    return icon;
  }

  private toggleHamburgerClasses(hamburger: ElementCreator, menuBg: ElementCreator, nav: ElementCreator): void {
    menuBg.getElement().classList.toggle('_active');
    hamburger.getElement().classList.toggle('_active');
    nav.getElement().classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
}
