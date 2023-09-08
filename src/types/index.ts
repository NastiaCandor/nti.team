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

// UTILES ITEMS

export const btnContainer = {
  btnBlock: {
    tag: 'div',
    cssClasses: ['content__info-more', 'button__wrapper'],
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
