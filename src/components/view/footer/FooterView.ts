/* eslint-disable prettier/prettier */
import { FooterMenuItemType, OUR_CONTACTS } from '../../../types';
import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import { FOOTER_MENU, footerParams } from './footer-params';

export default class FooterView extends View {
  constructor() {
    super(footerParams.footer);
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(footerParams.wrapper);
    this.injectNavigation(wrapper);
    this.injectContacts(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectNavigation(wrapper: ElementCreator): void {
    const container = new ElementCreator(footerParams.navigation.container);
    this.injectLogo(container);
    const catalog = this.getNavigationList(FOOTER_MENU.catalog.title, FOOTER_MENU.catalog.items);
    const account = this.getNavigationList(FOOTER_MENU.account.title, FOOTER_MENU.account.items);
    const help = this.getNavigationList(FOOTER_MENU.help.title, FOOTER_MENU.help.items);
    container.addInnerElement([catalog, account, help]);

    wrapper.addInnerElement(container);
  }

  private getNavigationList(titleText: string, items: FooterMenuItemType[]): ElementCreator {
    const block = new ElementCreator(footerParams.navigation.block);
    const title = new ElementCreator(footerParams.navigation.title);
    title.setTextContent(titleText);
    const list = new ElementCreator(footerParams.navigation.list);
    items.forEach((elem) => {
      const item = new ElementCreator(footerParams.navigation.item);
      const link = new ElementCreator(footerParams.navigation.link);
      link.setAttribute('href', elem.link);
      link.setTextContent(elem.title);
      item.addInnerElement(link);
      list.addInnerElement(item);
    });
    block.addInnerElement([title, list]);
    return block;
  }

  private injectLogo(wrapper: ElementCreator): void {
    const logo = new ElementCreator(footerParams.navigation.logo);
    logo.setAttribute('href', '#main');
    wrapper.addInnerElement(logo);
  }

  private injectContacts(wrapper: ElementCreator): void {
    const container = new ElementCreator(footerParams.contacts.contaienr);
    const address = this.getContactItem(
      OUR_CONTACTS.address.title,
      OUR_CONTACTS.address.contact,
      OUR_CONTACTS.address.link,
    );
    const tel = this.getContactItem(
      OUR_CONTACTS.tel.title,
      OUR_CONTACTS.tel.contact.join(', '),
      OUR_CONTACTS.tel.link,
    );
    const email = this.getContactItem(
      OUR_CONTACTS.email.title,
      OUR_CONTACTS.email.contact,
      OUR_CONTACTS.email.link,
    );
    const socials = this.getSocialItem();
    container.addInnerElement([address, tel, email, socials]);
    wrapper.addInnerElement(container);
  }

  private getContactItem(titleText: string, linkText: string, link: string) {
    const item = new ElementCreator(footerParams.contacts.item);
    const title = new ElementCreator(footerParams.contacts.title);
    title.setTextContent(titleText);
    const subtitle = new ElementCreator(footerParams.contacts.subtitle);
    subtitle.setTextContent(linkText);
    subtitle.setAttribute('href', link);
    item.addInnerElement([title, subtitle]);
    return item;
  }

  private getSocialItem() {
    const item = new ElementCreator(footerParams.contacts.item);
    OUR_CONTACTS.social.forEach((elem) => {
      const link = new ElementCreator(footerParams.contacts.social);
      link.setAttribute('href', elem.link);
      const icon = new ElementCreator(footerParams.contacts.socialIcon);
      icon.setImageLink(elem.iconSRC, elem.iconALT);
      link.addInnerElement(icon);
      item.addInnerElement(link);
    });
    return item;
  }
}
