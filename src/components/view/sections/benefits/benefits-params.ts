import { BenefitItemType, btnContainer } from '../../../../types';
import '../../../../assets/img/benefits_laptop.png';
import '../../../../assets/img/benefits_card.svg';
import '../../../../assets/img/benefits_auto.svg';
import '../../../../assets/img/benefits_experts.svg';
import '../../../../assets/img/benefits_box.svg';

const benefitsParams = {
  section: {
    tag: 'section',
    cssClasses: ['benefits'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'benefits__wrapper'],
  },
  info: {
    tag: 'div',
    cssClasses: ['benefits__info'],
  },
  imgContainer: {
    tag: 'div',
    cssClasses: ['benefits__img-container'],
  },
  img: {
    tag: 'img',
    cssClasses: ['benefits__img'],
  },
  preview: {
    container: {
      tag: 'div',
      cssClasses: ['benefits__preview'],
    },
    title: {
      tag: 'p',
      cssClasses: ['benefits__preview__title'],
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['benefits__preview__subtitle'],
    },
    btn: btnContainer,
  },
  list: {
    tag: 'div',
    cssClasses: ['benefits__list'],
  },
  benefit: {
    container: {
      tag: 'div',
      cssClasses: ['benefits__list__container'],
    },
    img: {
      tag: 'div',
      cssClasses: ['benefits__list__img'],
    },
    icon: {
      tag: 'img',
      cssClasses: ['benefits__list__icon'],
    },
    title: {
      tag: 'p',
      cssClasses: ['benefits__list__title'],
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['benefits__list__subtitle'],
    },
  },
};

const INFO_CONTENT = {
  imgSRC: '../../../../assets/img/benefits_laptop.png',
  imgALT: 'Laptop image',
  title: 'Наши преимущества',
  subtitle:
    'Оптимизация мощностей (расходов, социальных выплат и т.п.) позволили компании на 4,7% понизить цены по сравнению с конкурентами',
  btnText: 'Оставить заявку',
};

const BENEFITS_ITEMS: BenefitItemType[] = [
  {
    iconSRC: '../../../../assets/img/benefits_card.svg',
    iconAlt: 'Card icon',
    title: 'Самые выгодные и низкие цены',
    subtitle: 'В наличии широкий ассортимент, а также доступные цены на ноутбуки Dell',
  },
  {
    iconSRC: '../../../../assets/img/benefits_auto.svg',
    iconAlt: 'Benefit icon',
    title: 'Авторизованный сервисный центр DELL',
    subtitle: 'Сертифицированный сервисный центр по ремонту техники Dell в России и странах СНГ',
  },
  {
    iconSRC: '../../../../assets/img/benefits_experts.svg',
    iconAlt: 'Experts icon',
    title: 'Высокий уровень технической экспертизы',
    subtitle: 'Мы прошли аттестацию в виде тестирования, где показали высокий уровень знаний',
  },
  {
    iconSRC: '../../../../assets/img/benefits_box.svg',
    iconAlt: 'Box icon',
    title: 'Официальный партнер DELL',
    subtitle: 'Официальный поставщик продукции DELL в России и странах СНГ',
  },
];

export { benefitsParams, INFO_CONTENT, BENEFITS_ITEMS };
