import { btnContainer } from '../../types';
import View from '../view/View';
import ElementCreator from './ElementCreator';

export default class ButtonCreator extends View {
  btnText: string;

  constructor(text: string) {
    super(btnContainer.btnBlock);
    this.btnText = text;
    this.render();
  }

  public render(): void {
    this.configure();
  }

  protected configure(): void {
    const btn = new ElementCreator(btnContainer.btn);
    const btnText = new ElementCreator(btnContainer.btnText);
    btnText.setTextContent(this.btnText);
    this.element.append(btn.getElement(), btnText.getElement());
  }
}
