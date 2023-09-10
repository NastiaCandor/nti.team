import '../../../../assets/img/main-slider.png';
import '../../../../assets/img/main-slider-2.png';
import '../../../../assets/img/main-slider-3.png';

const mainParams = {
  section: {
    tag: 'section',
    cssClasses: ['main'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'main__wrapper'],
  },
  scrollBlock: {
    tag: 'div',
    cssClasses: ['main__scroll'],
    textContent: 'Scroll to catalog',
  },
  content: {
    block: {
      tag: 'div',
      cssClasses: ['content'],
    },
    info: {
      tag: 'div',
      cssClasses: ['content__info'],
    },
    infoSubtitle: {
      tag: 'p',
      cssClasses: ['content__info-subtitle'],
    },
    infoTitle: {
      tag: 'p',
      cssClasses: ['content__info-title'],
    },
    btnBlock: {
      tag: 'div',
      cssClasses: ['content__info-more', 'button__wrapper'],
    },
    btn: {
      tag: 'button',
      cssClasses: ['content__info-more-btn', 'button'],
      textContent: '→',
    },
    btnText: {
      tag: 'p',
      cssClasses: ['content__info-more-text', 'button-title'],
      textContent: 'Побробнее',
    },
    contentPhoto: {
      tag: 'div',
      cssClasses: ['content__photo'],
    },
    contentPhotoImg: {
      tag: 'img',
      cssClasses: ['content__photo-img'],
    },
  },
};

const SLIDER_CONTENT = [
  {
    subtitle: 'Новое поступление',
    title: 'Лучшие товары от компании Dell',
    imgSRC: '../../../../assets/img/main-slider.png',
  },
  {
    subtitle: '',
    title: 'Выгодное предложение от Dell',
    imgSRC: '../../../../assets/img/main-slider-2.png',
  },
  {
    subtitle: 'Персональные компьютеры',
    title: 'Самые выгодные и низкие цены',
    imgSRC: '../../../../assets/img/main-slider-3.png',
  },
];

export { mainParams, SLIDER_CONTENT };
