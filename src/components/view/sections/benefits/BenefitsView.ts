import { BenefitItemType } from '../../../../types';
import ButtonCreator from '../../../utils/ButtonCreator';
import ElementCreator from '../../../utils/ElementCreator';
import View from '../../View';
import { BENEFITS_ITEMS, INFO_CONTENT, benefitsParams } from './benefits-params';

export default class BenefitsView extends View {
  constructor() {
    super(benefitsParams.section);
    this.render();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(benefitsParams.wrapper);
    this.element.setAttribute('id', 'benefits');
    this.injectInfoContainer(wrapper);
    this.injectBenefits(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectInfoContainer(wrapper: ElementCreator): void {
    const info = new ElementCreator(benefitsParams.info);

    const imgContainer = new ElementCreator(benefitsParams.imgContainer);
    const img = new ElementCreator(benefitsParams.img);
    img.setImageLink(INFO_CONTENT.imgSRC, INFO_CONTENT.imgALT);
    imgContainer.addInnerElement(img);

    const preview = new ElementCreator(benefitsParams.preview.container);
    const title = new ElementCreator(benefitsParams.preview.title);
    title.setTextContent(INFO_CONTENT.title);
    const subtitle = new ElementCreator(benefitsParams.preview.subtitle);
    subtitle.setTextContent(INFO_CONTENT.subtitle);
    const btn = new ButtonCreator(INFO_CONTENT.btnText);
    preview.addInnerElement([title, subtitle, btn]);

    info.addInnerElement([imgContainer, preview]);

    wrapper.addInnerElement(info);
  }

  private injectBenefits(wrapper: ElementCreator): void {
    const list = new ElementCreator(benefitsParams.list);
    BENEFITS_ITEMS.forEach((elem) => {
      const benefit = this.getBenefitItem(elem);
      list.addInnerElement(benefit);
    });

    wrapper.addInnerElement(list);
  }

  private getBenefitItem(data: BenefitItemType): ElementCreator {
    const item = new ElementCreator(benefitsParams.benefit.container);
    const icon = new ElementCreator(benefitsParams.benefit.img);
    const img = new ElementCreator(benefitsParams.benefit.icon);
    img.setImageLink(data.iconSRC, data.iconAlt);
    icon.addInnerElement(img);
    const title = new ElementCreator(benefitsParams.benefit.title);
    title.setTextContent(data.title);
    const subtitle = new ElementCreator(benefitsParams.benefit.subtitle);
    subtitle.setTextContent(data.subtitle);
    item.addInnerElement([icon, title, subtitle]);
    return item;
  }
}
