System.register([], function (exports_1, context_1) {
    "use strict";
    var Consulta;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Consulta = class Consulta {
                constructor(sexo, frequencia, idade, peso, altura) {
                    this.sexo = sexo;
                    this.frequencia = frequencia;
                    this.idade = idade;
                    this.peso = peso;
                    this.altura = altura;
                }
                get TMB() {
                    return (this.sexo == "masculino") ?
                        66.5 + (13.8 * this.peso) + (5 * this.altura) - (6.8 * this.idade) :
                        655.1 + (9.5 * this.peso) + (1.8 * this.altura) - (4.7 * this.idade);
                }
                get atividade() {
                    const atividade = {
                        'sedentario': 1,
                        'leve': 1.1,
                        'medio': 1.2,
                        'intenso': 1.5
                    };
                    return atividade[this.frequencia];
                }
                get calorias() {
                    return this.TMB * this.atividade;
                }
            };
            exports_1("Consulta", Consulta);
        }
    };
});
