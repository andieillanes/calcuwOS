import { Consulta } from '../models/Consulta';
import { ConsultaView } from '../views/ConsultaView';
import { domInject } from '../helpers/decorators/domInject';
import { MensagemView } from '../views/MensagemView';

export class ConsultaController {

  @domInject('#sexo')
  private _inputSexo: HTMLInputElement;
  @domInject('#frequencia')
  private _inputFrequencia: HTMLInputElement;
  @domInject('#idade')
  private _inputIdade: HTMLInputElement;
  @domInject('#peso')
  private _inputPeso: HTMLInputElement;
  @domInject('#altura')
  private _inputAltura: HTMLInputElement;

  private _consultaView = new ConsultaView('#renderCalorias');
  private _mensagemView = new MensagemView('#renderMensagem');

  constructor() {
    this._consultaView.atualiza();
  }

  calcula(e: Event) {

    e.preventDefault();

    const consulta = new Consulta(
      this._inputSexo.value,
      this._inputFrequencia.value,
      parseInt(this._inputIdade.value),
      parseFloat(this._inputPeso.value),
      parseFloat(this._inputAltura.value)
    );

    this._consultaView.atualiza(consulta);
    this._mensagemView.atualiza('Atenção! essa calculadora não substitui uma avaliação nutricional.');
  }
}