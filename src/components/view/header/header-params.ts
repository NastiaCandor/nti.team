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
    cssClasses: ['hambirger'],
  },
  hamburgerLine: {
    tag: 'span',
    cssClasses: ['hambirger__line'],
  },
};

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
    title: 'Наш АЦС',
    link: '#ourASC',
  },
  {
    title: 'Контакты',
    link: '#contacts',
  },
];

const USER_ICONS_TYPES = ['profile', 'connection', 'favorite', 'shopping-bag'];

export { headerParams, NAVIGATION_LINKS, USER_ICONS_TYPES };
