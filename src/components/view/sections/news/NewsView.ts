import { NewsItemType } from '../../../../types';
import ButtonCreator from '../../../utils/ButtonCreator';
import ElementCreator from '../../../utils/ElementCreator';
import View from '../../View';
import { NEWS_CARDS, PREVIEW_INFO, newsParams } from './news-params';

export default class NewsView extends View {
  constructor() {
    super(newsParams.section);
    this.render();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const wrapper = new ElementCreator(newsParams.wrapper);
    this.element.setAttribute('id', 'news');
    this.injectPreview(wrapper);
    this.injectNews(wrapper);
    this.element.append(wrapper.getElement());
  }

  private injectPreview(wrapper: ElementCreator): void {
    const preview = new ElementCreator(newsParams.preview.container);

    const info = new ElementCreator(newsParams.preview.info);
    const title = new ElementCreator(newsParams.preview.title);
    title.setTextContent(PREVIEW_INFO.title);
    const subtitle = new ElementCreator(newsParams.preview.subtitle);
    subtitle.setTextContent(PREVIEW_INFO.subtitle);
    info.addInnerElement([title, subtitle]);

    const btn = new ButtonCreator(PREVIEW_INFO.btnText);
    btn.setCssClasses(PREVIEW_INFO.btnClasses);
    preview.addInnerElement([info, btn]);

    wrapper.addInnerElement(preview);
  }

  private injectNews(wrapper: ElementCreator): void {
    const container = new ElementCreator(newsParams.cards.container);
    NEWS_CARDS.forEach((elem) => {
      const item = this.getNewsItem(elem);
      container.addInnerElement(item);
    });

    wrapper.addInnerElement(container);
  }

  private getNewsItem(data: NewsItemType): ElementCreator {
    const item = new ElementCreator(newsParams.cards.item);
    item.getElement().style.backgroundImage = `url('${data.bgSRC}'`;

    const details = new ElementCreator(newsParams.cards.details);
    const title = new ElementCreator(newsParams.cards.title);
    title.setTextContent(data.title);
    const subtitle = new ElementCreator(newsParams.cards.subtitle);
    subtitle.setTextContent(data.subtitle);
    details.addInnerElement([title, subtitle]);

    const dateContainer = new ElementCreator(newsParams.cards.date.container);
    const dateDay = new ElementCreator(newsParams.cards.date.dateDay);
    dateDay.setTextContent(data.dateDay);
    const dateMonth = new ElementCreator(newsParams.cards.date.dateMonth);
    dateMonth.setTextContent(data.dateMonth);
    dateContainer.addInnerElement([dateDay, dateMonth]);

    const btn = new ElementCreator(newsParams.cards.btn);

    item.addInnerElement([details, dateContainer, btn]);

    return item;
  }
}
