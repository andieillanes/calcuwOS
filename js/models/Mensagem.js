System.register([], function (exports_1, context_1) {
    "use strict";
    var Mensagem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Mensagem = class Mensagem {
                constructor(texto) {
                    this._texto = texto;
                }
            };
            exports_1("Mensagem", Mensagem);
        }
    };
});
