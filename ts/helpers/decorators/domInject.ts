export function domInject(seletor: string) {

  return function (target: any, key: string) {

    let elemento: Element;

    const getter = () => {

      if (!elemento)
        elemento = <HTMLInputElement>document.querySelector(seletor);

      return elemento;
    }

    Object.defineProperty(target, key, {
      get: getter
    });
  }
}