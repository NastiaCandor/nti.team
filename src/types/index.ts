// TYPES

export type ElementParamsType = {
  textContent?: string;
  cssClasses?: string[];
  value?: string;
  link?: string;
  src?: string;
  alt?: string;
  tag: string;
  id?: string;
  mouseEvent?: ((evt?: Event) => void) | null;
};

export type CatalogItemType = {
  id: string;
  name: string;
  quantity: string;
  imgSRC: string;
  imgAlt: string;
};

export type BenefitItemType = {
  iconSRC: string;
  iconAlt: string;
  title: string;
  subtitle: string;
};

export type NewsItemType = {
  title: string;
  subtitle: string;
  dateDay: string;
  dateMonth: string;
  bgSRC: string;
};

export type FooterMenuItemType = {
  title: string;
  link: string;
};

// UTILES ITEMS

export const btnContainer = {
  btnBlock: {
    tag: 'div',
    cssClasses: ['button__wrapper'],
  },
  btn: {
    tag: 'button',
    cssClasses: ['button'],
    textContent: '→',
  },
  btnText: {
    tag: 'p',
    cssClasses: ['button-title'],
  },
};

// CONSTANTS

export const OUR_CONTACTS = {
  address: {
    title: 'Адрес',
    contact: 'Москва, ул. 3-я Хорошевская, дом 2, строение 1',
    link: 'https://clck.ru/35eCjd',
  },
  tel: {
    title: 'Телефон',
    contact: ['+7 495 737-06-01', '+7 495 994-46-01'],
    link: 'tel:+74957370601',
  },
  email: {
    title: 'E-mail',
    contact: 'dell_ru@gmail.com',
    link: 'mailto:dell_ru@gmail.com',
  },
  social: [
    {
      link: 'https://www.facebook.com/Dell.CIS/?locale=ru_RU',
      iconSRC: '../assets/img/contacts_facebook.svg',
      iconALT: 'Facebook icon',
    },
    {
      link: 'https://www.whatsapp.com/coronavirus/get-started?lang=ru_RU',
      iconSRC: '../assets/img/contacts_whatsup.svg',
      iconALT: 'WhatsApp icon',
    },
  ],
};
