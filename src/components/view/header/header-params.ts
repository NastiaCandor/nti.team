const headerParams = {
  header: {
    tag: 'header',
    cssClasses: ['header'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'header__wrapper'],
  },
  logo: {
    tag: 'a',
    cssClasses: ['header__logo'],
  },
  menuBg: {
    tag: 'div',
    cssClasses: ['menu__bg'],
  },
  nav: {
    tag: 'nav',
    cssClasses: ['header__navigation'],
  },
  navList: {
    tag: 'ul',
    cssClasses: ['navigation'],
  },
  navItem: {
    tag: 'li',
    cssClasses: ['navigation__item'],
  },
  navLink: {
    tag: 'a',
    cssClasses: ['navigation__link'],
  },
  searchBlock: {
    tag: 'div',
    cssClasses: ['search__block'],
  },
  searchIcon: {
    tag: 'div',
    cssClasses: ['search__icon'],
  },
  userIconsBlock: {
    tag: 'div',
    cssClasses: ['user__block'],
  },
  userIcon: {
    tag: 'div',
    cssClasses: ['user__icon'],
  },
  notification: {
    tag: 'span',
    cssClasses: ['user__notification'],
    textContent: '3',
  },
  hamburger: {
    tag: 'span',
    cssClasses: ['hamburger'],
  },
  hamburgerLine: {
    tag: 'span',
    cssClasses: ['hamburger__line'],
  },
};

const dropMenu = {
  wrapper: {
    tag: 'div',
    cssClasses: ['drop-menu__wrapper'],
  },
  container: {
    tag: 'div',
    cssClasses: ['drop-menu'],
  },
  personal: {
    container: {
      tag: 'div',
      cssClasses: ['drop-menu__personal'],
    },
    userIcon: {
      tag: 'div',
      cssClasses: ['user__icon', 'drop-menu__personal__icon'],
    },
    userName: {
      tag: 'p',
      cssClasses: ['drop-menu__personal__name'],
    },
  },
  menu: {
    list: {
      tag: 'ul',
      cssClasses: ['drop-menu__menu__list'],
    },
    item: {
      tag: 'li',
      cssClasses: ['drop-menu__personal__item'],
    },
    link: {
      tag: 'a',
      cssClasses: ['drop-menu__personal__link'],
    },
  },
};

const USER_MENU_LIST = [
  {
    link: '#account',
    title: 'Личный кабинет',
  },
  {
    link: '#order-history',
    title: 'История заказов',
  },
  {
    link: '#personal-offers',
    title: 'Персональные предложения',
  },
  {
    link: '#log-out',
    title: 'Выйти',
  },
];

const USER_NAME = 'Мария';

const NAVIGATION_LINKS = [
  {
    title: 'Главная',
    link: '#main',
  },
  {
    title: 'Каталог',
    link: '#catalog',
  },
  {
    title: 'Новости',
    link: '#news',
  },
  {
    title: 'Наш АСЦ',
    link: '#benefits',
  },
  {
    title: 'Контакты',
    link: '#contacts',
  },
];

const USER_ICONS_TYPES = ['profile', 'connection', 'favorite', 'shopping-bag'];

export { headerParams, NAVIGATION_LINKS, USER_ICONS_TYPES, dropMenu, USER_MENU_LIST, USER_NAME };
