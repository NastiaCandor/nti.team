import { CatalogItemType, btnContainer } from '../../../../types';
import '../../../../assets/img/catalog_1.png';
import '../../../../assets/img/catalog_2.png';
import '../../../../assets/img/catalog_3.png';
import '../../../../assets/img/catalog_4.png';
import '../../../../assets/img/catalog_5.png';

const catalogParams = {
  section: {
    tag: 'section',
    cssClasses: ['catalog'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'catalog__wrapper'],
  },
  catalog: {
    container: {
      tag: 'div',
      cssClasses: ['catalog__container'],
    },
    item: {
      tag: 'div',
      cssClasses: ['catalog__item'],
    },
    imgContainer: {
      tag: 'div',
      cssClasses: ['catalog__item__img-container'],
    },
    img: {
      tag: 'img',
      cssClasses: ['catalog__item__img'],
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['catalog__item__subtitle'],
    },
    title: {
      tag: 'p',
      cssClasses: ['catalog__item__title'],
    },
    id: {
      tag: 'p',
      cssClasses: ['catalog__item__id'],
    },
  },
  btn: btnContainer,
};

const CATALOG_ITEMS: CatalogItemType[] = [
  {
    id: '01',
    name: 'Ноутбуки',
    quantity: '105 товаров',
    imgSRC: '../../../../assets/img/catalog_1.png',
    imgAlt: 'Laptop image',
  },
  {
    id: '02',
    name: 'Персональные компьютеры',
    quantity: '65 товаров',
    imgSRC: '../../../../assets/img/catalog_2.png',
    imgAlt: 'Computer image',
  },
  {
    id: '03',
    name: 'Cерверы',
    quantity: '13 товаров',
    imgSRC: '../../../../assets/img/catalog_3.png',
    imgAlt: 'Server image',
  },
  {
    id: '04',
    name: 'Dell EMC',
    quantity: '2345 товаров',
    imgSRC: '../../../../assets/img/catalog_4.png',
    imgAlt: 'Dell EMC image',
  },
  {
    id: '05',
    name: 'Запасные части к Dell EMC',
    quantity: '195 товаров',
    imgSRC: '../../../../assets/img/catalog_5.png',
    imgAlt: 'Spare parts image',
  },
];

const FIRST_CATALOG_ITEM = {
  title: 'Каталог товаров от Dell',
  subtitle: 'Наша компания является зарегистрированным и официальным партнером Dell в России.',
  btnText: 'В каталог',
};

export { catalogParams, CATALOG_ITEMS, FIRST_CATALOG_ITEM };
