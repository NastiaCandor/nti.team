import Splide from '@splidejs/splide';
import ElementCreator from '../../../utils/ElementCreator';
import View from '../../View';
import { mainParams, SLIDER_CONTENT } from './main-params';
import sliderParams from './slider-params';

export default class MainView extends View {
  constructor() {
    super(mainParams.section);
    this.render();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(mainParams.wrapper);
    this.element.setAttribute('id', 'main');
    this.injectScroll(wrapper);
    this.injectContent(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectScroll(wrapper: ElementCreator): void {
    const scroll = new ElementCreator(mainParams.scrollBlock);
    wrapper.addInnerElement(scroll);
  }

  private injectContent(wrapper: ElementCreator): void {
    const content = new ElementCreator(mainParams.content.block);
    this.injectSlider(content);

    wrapper.addInnerElement(content);
  }

  private injectSlider(wrapper: ElementCreator): void {
    const slider = new ElementCreator(sliderParams.maincarousel);
    const track = new ElementCreator(sliderParams.track);
    const list = new ElementCreator(sliderParams.list);
    SLIDER_CONTENT.forEach((elem) => {
      const slide = new ElementCreator(sliderParams.slide);

      const info = new ElementCreator(mainParams.content.info);
      const subtitle = new ElementCreator(mainParams.content.infoSubtitle);
      subtitle.setTextContent(elem.subtitle);
      const title = new ElementCreator(mainParams.content.infoTitle);
      title.setTextContent(elem.title);
      const btnBlock = new ElementCreator(mainParams.content.btnBlock);
      const btn = new ElementCreator(mainParams.content.btn);
      const btnText = new ElementCreator(mainParams.content.btnText);
      btnBlock.addInnerElement([btn, btnText]);
      info.addInnerElement([subtitle, title, btnBlock]);

      const photo = new ElementCreator(mainParams.content.contentPhoto);
      const img = new ElementCreator(mainParams.content.contentPhotoImg);
      img.setImageLink(elem.imgSRC, 'photo of a laptop');
      photo.addInnerElement(img);

      slide.addInnerElement([info, photo]);
      list.addInnerElement(slide);
    });

    track.addInnerElement(list);
    slider.addInnerElement(track);

    const splide = new Splide(slider.getElement(), {
      padding: '5rem',
      arrowPath: 'M94 1L104.5 11.5M104.5 11.5L94 22M104.5 11.5H0',
    });

    splide.mount();

    wrapper.addInnerElement(slider);
  }
}
