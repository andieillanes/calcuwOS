export class Consulta {

  constructor(
    readonly sexo: string,
    readonly frequencia: string,
    readonly idade: number,
    readonly peso: number,
    readonly altura: number
  ) { }

  get TMB() {
    return (this.sexo == "masculino") ?
      66.5 + (13.8 * this.peso) + (5 * this.altura) - (6.8 * this.idade) :
      655.1 + (9.5 * this.peso) + (1.8 * this.altura) - (4.7 * this.idade);
  }

  get atividade() {

    const atividade: Atividade = {
      'sedentario': 1.2,
      'leve': 1.375,
      'medio': 1.550,
      'intenso': 1.725
    }

    return atividade[this.frequencia];
  }

  get calorias() {
    return (this.TMB * this.atividade).toFixed(0);
  }

}

export interface Atividade {
  [key: string]: number;
}