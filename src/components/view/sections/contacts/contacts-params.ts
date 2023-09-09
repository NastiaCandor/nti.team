/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import '../../../../assets/img/contacts_facebook.svg';
import '../../../../assets/img/contacts_whatsup.svg';

const contactsParams = {
  section: {
    tag: 'section',
    cssClasses: ['contacts'],
  },
  wrapper: {
    tag: 'div',
    cssClasses: ['wrapper', 'contacts__wrapper'],
  },
  our: {
    container: {
      tag: 'div',
      cssClasses: ['contacts__our'],
    },
    title: {
      tag: 'p',
      cssClasses: ['contacts__our__title'],
      textContent: 'Наши контакты',
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['contacts__our__subtitle'],
      textContent: 'Вы можете связаться с нашим онлайн-консультантом',
    },
    info: {
      container: {
        tag: 'div',
        cssClasses: ['contacts__our__info-container'],
      },
      item: {
        tag: 'a',
        cssClasses: ['contacts__our__info-item'],
      },
      icon: {
        tag: 'div',
        cssClasses: ['contacts__our__info-icon'],
      },
      details: {
        tag: 'div',
        cssClasses: ['contacts__our__info-details'],
      },
      name: {
        tag: 'p',
        cssClasses: ['contacts__our__info-title'],
      },
      contact: {
        tag: 'p',
        cssClasses: ['contacts__our__info-contact'],
      },
    },
    social: {
      container: {
        tag: 'div',
        cssClasses: ['contacts__our__social'],
      },
      link: {
        tag: 'a',
        cssClasses: ['contacts__our__link'],
      },
      icon: {
        tag: 'img',
        cssClasses: ['contacts__our__link-icon'],
      },
    },
  },
  request: {
    container: {
      tag: 'div',
      cssClasses: ['contacts__request'],
    },
    title: {
      tag: 'p',
      cssClasses: ['contacts__request__title'],
      textContent: 'Оставьте заявку',
    },
    subtitle: {
      tag: 'p',
      cssClasses: ['contacts__request__subtitle'],
      textContent: 'Оставьте свой номер, и мы перезвоним Вам.',
    },
    form: {
      tag: 'form',
      cssClasses: ['contacts__request__form'],
    },
    item: {
      tag: 'div',
      cssClasses: ['contacts__request__box'],
    },
    input: {
      tag: 'input',
      cssClasses: ['contacts__request__input', 'form__input'],
    },
    label: {
      tag: 'label',
      cssClasses: ['contacts__request__label', 'form__label'],
    },
    textarea: {
      tag: 'textarea',
      cssClasses: ['contacts__request__textarea', 'form__input', 'form__textarea'],
    },
    btnText: 'Заказать',
  },
};

const FORM_FIELDS = [
  {
    label: 'Ваше имя',
    labelClasses: ['form__label_name'],
    inputClasses: ['form__input_name'],
    inputAttributes: [
      {
        type: 'type',
        value: 'text',
      },
      {
        type: 'required',
        value: '',
      },
    ],
  },
  {
    label: 'Номер телефона',
    labelClasses: ['form__label_phone'],
    inputClasses: ['form__input_phone'],
    inputAttributes: [
      {
        type: 'type',
        value: 'tel',
      },
      {
        type: 'required',
        value: '',
      },
      {
        type: 'pattern',
        value: '[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}',
      },
      {
        type: 'title',
        value: 'XXX XXX XX XX',
      },
    ],
  },
  {
    label: 'Комментарий',
    labelClasses: ['form__label_comment'],
    textareaClasses: ['form__input_comment'],
    textareaAttributes: [
      {
        type: 'required',
        value: '',
      },
    ],
  },
];

export { contactsParams, FORM_FIELDS };
