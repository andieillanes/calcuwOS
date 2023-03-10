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
                        66.5 + (10 * this.peso) + (6.25 * this.altura) - (5 * this.idade) + 5 :
                        655.1 + (9.5 * this.peso) + (6.25 * this.altura) - (5 * this.idade) - 161;
                }
                get atividade() {
                    const atividade = {
                        'sedentario': 1.1,
                        'leve': 1.3,
                        'medio': 1.5,
                        'intenso': 1.7
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
