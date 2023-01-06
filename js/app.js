System.register(["./controllers/ConsultaController"], function (exports_1, context_1) {
    "use strict";
    var ConsultaController_1, controller, form;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConsultaController_1_1) {
                ConsultaController_1 = ConsultaController_1_1;
            }
        ],
        execute: function () {
            controller = new ConsultaController_1.ConsultaController();
            form = document.querySelector('form');
            form.addEventListener('submit', controller.calcula.bind(controller));
        }
    };
});
