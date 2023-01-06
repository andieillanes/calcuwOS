System.register(["../models/Consulta", "../views/ConsultaView", "../helpers/decorators/domInject", "../views/MensagemView"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Consulta_1, ConsultaView_1, domInject_1, MensagemView_1, ConsultaController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Consulta_1_1) {
                Consulta_1 = Consulta_1_1;
            },
            function (ConsultaView_1_1) {
                ConsultaView_1 = ConsultaView_1_1;
            },
            function (domInject_1_1) {
                domInject_1 = domInject_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            }
        ],
        execute: function () {
            ConsultaController = class ConsultaController {
                constructor() {
                    this._consultaView = new ConsultaView_1.ConsultaView('#renderCalorias');
                    this._mensagemView = new MensagemView_1.MensagemView('#renderMensagem');
                    this._consultaView.atualiza();
                }
                calcula(e) {
                    e.preventDefault();
                    const consulta = new Consulta_1.Consulta(this._inputSexo.value, this._inputFrequencia.value, parseInt(this._inputIdade.value), parseFloat(this._inputPeso.value), parseFloat(this._inputAltura.value));
                    this._consultaView.atualiza(consulta);
                    this._mensagemView.atualiza('Atención esta calculadora no sustituye una consulta de nutrición');
                }
            };
            __decorate([
                domInject_1.domInject('#sexo')
            ], ConsultaController.prototype, "_inputSexo", void 0);
            __decorate([
                domInject_1.domInject('#frequencia')
            ], ConsultaController.prototype, "_inputFrequencia", void 0);
            __decorate([
                domInject_1.domInject('#idade')
            ], ConsultaController.prototype, "_inputIdade", void 0);
            __decorate([
                domInject_1.domInject('#peso')
            ], ConsultaController.prototype, "_inputPeso", void 0);
            __decorate([
                domInject_1.domInject('#altura')
            ], ConsultaController.prototype, "_inputAltura", void 0);
            exports_1("ConsultaController", ConsultaController);
        }
    };
});
