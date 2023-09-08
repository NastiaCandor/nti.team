import { NewsItemType, btnContainer } from '../../../../types';
import '../../../../assets/img/news_bg_1.png';
import '../../../../assets/img/news_bg_2.png';
import '../../../../assets/img/news_bg_3.png';
import '../../../../assets/img/news_bg_4.png';
import '../../../../assets/img/news_bg_5.png';
import '../../../../assets/img/news_bg_6.png';

const newsParams = {
  section: {
    tag: 'section',
    cssClasses: ['news'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'news__wrapper'],
  },
  preview: {
    container: {
      tag: 'div',
      cssClasses: ['news__preview'],
    },
    info: {
      tag: 'div',
      cssClasses: ['news__info'],
    },
    title: {
      tag: 'p',
      cssClasses: ['news__info__title'],
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['news__info__subtitle'],
    },
    btn: btnContainer,
  },
  cards: {
    container: {
      tag: 'div',
      cssClasses: ['news__cards'],
    },
    item: {
      tag: 'div',
      cssClasses: ['news__cards__item'],
    },
    details: {
      tag: 'div',
      cssClasses: ['news__cards__details'],
    },
    title: {
      tag: 'p',
      cssClasses: ['news__cards__title'],
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['news__cards__subtitle'],
    },
    btn: {
      tag: 'button',
      cssClasses: ['news__cards__btn', 'button'],
      textContent: '→',
    },
    date: {
      container: {
        tag: 'div',
        cssClasses: ['news__cards__date'],
      },
      dateDay: {
        tag: 'p',
        cssClasses: ['news__cards__date-day'],
      },
      dateMonth: {
        tag: 'p',
        cssClasses: ['news__cards__date-month'],
      },
    },
  },
};

const PREVIEW_INFO = {
  title: 'Последние новости',
  subtitle: 'Вы можете посмотреть ещё больше интересных новостей и узнать о последних новинках, перейдя по кнопке',
  btnText: 'Все новости',
  btnClasses: ['news__info__btn'],
};

const NEWS_CARDS: NewsItemType[] = [
  {
    title: 'GE использует технологии Dell',
    subtitle: 'Вы можете посмотреть ещё больше интересных',
    dateDay: '11',
    dateMonth: 'июля',
    bgSRC: '../assets/img/news_bg_1.png',
  },
  {
    title: 'GE использует технологии Dell',
    subtitle: 'Вы можете посмотреть ещё больше интересных',
    dateDay: '11',
    dateMonth: 'июля',
    bgSRC: '../assets/img/news_bg_2.png',
  },
  {
    title: 'GE использует технологии Dell',
    subtitle: 'Вы можете посмотреть ещё больше интересных',
    dateDay: '11',
    dateMonth: 'июля',
    bgSRC: '../assets/img/news_bg_3.png',
  },
  {
    title: 'GE использует технологии Dell',
    subtitle: 'Вы можете посмотреть ещё больше интересных',
    dateDay: '11',
    dateMonth: 'июля',
    bgSRC: '../assets/img/news_bg_4.png',
  },
  {
    title: 'GE использует технологии Dell',
    subtitle: 'Вы можете посмотреть ещё больше интересных',
    dateDay: '11',
    dateMonth: 'июля',
    bgSRC: '../assets/img/news_bg_5.png',
  },
  {
    title: 'GE использует технологии Dell',
    subtitle: 'Вы можете посмотреть ещё больше интересных',
    dateDay: '11',
    dateMonth: 'июля',
    bgSRC: '../assets/img/news_bg_6.png',
  },
];

export { newsParams, NEWS_CARDS, PREVIEW_INFO };
