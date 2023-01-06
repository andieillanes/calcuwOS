import { View } from './View';

export class MensagemView extends View<string>{

  constructor(seletor: string) {
    super(seletor)
  }

  template(texto: string): string {
    return `
      <div class="alert alert-warning col my-2" role="alert">
        ${texto}
      </div>
   `;
  }
}