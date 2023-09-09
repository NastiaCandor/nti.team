import { OUR_CONTACTS } from '../../../../types';
import ButtonCreator from '../../../utils/ButtonCreator';
import ElementCreator from '../../../utils/ElementCreator';
import View from '../../View';
import { FORM_FIELDS, contactsParams } from './contacts-params';

export default class ContactsView extends View {
  constructor() {
    super(contactsParams.section);
    this.render();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(contactsParams.wrapper);
    this.element.setAttribute('id', 'contacts');
    this.injectOurInfo(wrapper);
    this.injectForm(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectOurInfo(wrapper: ElementCreator): void {
    const container = new ElementCreator(contactsParams.our.container);

    const title = new ElementCreator(contactsParams.our.title);
    const subtitle = new ElementCreator(contactsParams.our.subtitle);
    container.addInnerElement([title, subtitle]);

    const info = new ElementCreator(contactsParams.our.info.container);
    info.addInnerElement(this.getInfoContact(OUR_CONTACTS.address.title, OUR_CONTACTS.address.contact, ['_address']));
    info.addInnerElement(this.getInfoContact(OUR_CONTACTS.email.title, OUR_CONTACTS.email.contact, ['_email']));
    const phones = this.getInfoContact(OUR_CONTACTS.tel.title, `${OUR_CONTACTS.tel.contact.join(' ')}`, ['_phone']);
    info.addInnerElement(phones);
    container.addInnerElement(info);

    const socialContainer = new ElementCreator(contactsParams.our.social.container);
    this.injectSocials(socialContainer);
    container.addInnerElement(socialContainer);

    wrapper.addInnerElement(container);
  }

  private getInfoContact(titleText: string, contactText: string, classes: string[]): ElementCreator {
    const item = new ElementCreator(contactsParams.our.info.item);
    const icon = new ElementCreator(contactsParams.our.info.icon);
    const details = new ElementCreator(contactsParams.our.info.details);
    icon.setCssClasses(classes);
    const name = new ElementCreator(contactsParams.our.info.name);
    name.setTextContent(titleText);
    const contact = new ElementCreator(contactsParams.our.info.contact);
    contact.setTextContent(contactText);
    details.addInnerElement([name, contact]);
    item.addInnerElement([icon, details]);
    return item;
  }

  private injectSocials(wrapper: ElementCreator): void {
    OUR_CONTACTS.social.forEach((elem) => {
      const link = new ElementCreator(contactsParams.our.social.link);
      link.setAttribute('href', elem.link);
      const icon = new ElementCreator(contactsParams.our.social.icon);
      icon.setImageLink(elem.iconSRC, elem.iconALT);
      link.addInnerElement(icon);
      wrapper.addInnerElement(link);
    });
  }

  private injectForm(wrapper: ElementCreator): void {
    const container = new ElementCreator(contactsParams.request.container);

    const title = new ElementCreator(contactsParams.request.title);
    const subtitle = new ElementCreator(contactsParams.request.subtitle);
    container.addInnerElement([title, subtitle]);

    const form = new ElementCreator(contactsParams.request.form);
    FORM_FIELDS.forEach((elem) => {
      const item = new ElementCreator(contactsParams.request.item);
      const label = new ElementCreator(contactsParams.request.label);
      label.setTextContent(elem.label);
      label.setCssClasses(elem.labelClasses);
      if (elem.textareaClasses) {
        const textarea = new ElementCreator(contactsParams.request.textarea);
        textarea.setCssClasses(elem.textareaClasses);
        elem.textareaAttributes.forEach((attr) => {
          textarea.setAttribute(attr.type, attr.value);
        });
        item.addInnerElement([label, textarea]);
      } else {
        const input = new ElementCreator(contactsParams.request.input);
        input.setCssClasses(elem.inputClasses);
        elem.inputAttributes.forEach((attr) => {
          input.setAttribute(attr.type, attr.value);
        });
        item.addInnerElement([label, input]);
      }
      form.addInnerElement(item);
    });
    const btn = new ButtonCreator(contactsParams.request.btnText);
    btn.getChildren()[0].setAttribute('type', 'submit');
    form.addInnerElement(btn);
    container.addInnerElement(form);

    wrapper.addInnerElement(container);
  }
}
