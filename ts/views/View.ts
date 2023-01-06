export abstract class View<T> {

  protected _elemento: Element;

  constructor(seletor: string) {
    this._elemento = <HTMLElement>document.querySelector(seletor);
  }

  abstract template(model?: T): string

  atualiza(model?: T) {
    return this._elemento.innerHTML = this.template(model);
  }
}