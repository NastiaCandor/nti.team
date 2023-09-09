const footerParams = {
  footer: {
    tag: 'footer',
    cssClasses: ['footer'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'footer__wrapper'],
  },
  navigation: {
    container: {
      tag: 'div',
      cssClasses: ['footer__navigation'],
    },
    block: {
      tag: 'div',
      cssClasses: ['footer__navigation__block'],
    },
    title: {
      tag: 'p',
      cssClasses: ['footer__navigation__title'],
    },
    list: {
      tag: 'ul',
      cssClasses: ['footer__navigation__list'],
    },
    item: {
      tag: 'li',
      cssClasses: ['footer__navigation__item'],
    },
    link: {
      tag: 'a',
      cssClasses: ['footer__navigation__link'],
    },
    logo: {
      tag: 'a',
      cssClasses: ['footer__logo'],
    },
  },
  contacts: {
    contaienr: {
      tag: 'div',
      cssClasses: ['footer__contacts'],
    },
    item: {
      tag: 'div',
      cssClasses: ['footer__contacts__block'],
    },
    title: {
      tag: 'p',
      cssClasses: ['footer__contacts__title'],
    },
    subtitle: {
      tag: 'a',
      cssClasses: ['footer__contacts__subtitle'],
    },
    social: {
      tag: 'a',
      cssClasses: ['footer__contacts__link'],
    },
    socialIcon: {
      tag: 'img',
      cssClasses: ['footer__contacts__link-icon'],
    },
  },
};

const FOOTER_MENU = {
  catalog: {
    title: 'Каталог',
    items: [
      {
        title: 'Ноутбуки',
        link: '#laptops',
      },
      {
        title: 'Персональные компьютеры',
        link: '#PC',
      },
      {
        title: 'Серверы',
        link: '#servers',
      },
      {
        title: 'Dell EMC',
        link: '#dell-emc',
      },
      {
        title: 'Запасные части к Dell EMC',
        link: '#spare-parts',
      },
    ],
  },
  account: {
    title: 'Личный кабинет',
    items: [
      {
        title: 'Профиль',
        link: '#profile',
      },
      {
        title: 'История заказов',
        link: '#order-history',
      },
      {
        title: 'SMS-уведомления',
        link: '#notification',
      },
      {
        title: 'Избранное',
        link: '#favorite',
      },
      {
        title: 'Сравнение товаров',
        link: '#comparison',
      },
    ],
  },
  help: {
    title: 'Помощь',
    items: [
      {
        title: 'Доставка и оплата',
        link: '#shipping-payment',
      },
      {
        title: 'Контакты',
        link: '#contacts',
      },
      {
        title: 'FAQ',
        link: '#FAQ',
      },
      {
        title: 'Наш АСЦ',
        link: '#benefits',
      },
    ],
  },
};

export { footerParams, FOOTER_MENU };
