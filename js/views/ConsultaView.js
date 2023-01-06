System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, ConsultaView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            ConsultaView = class ConsultaView extends View_1.View {
                constructor(seletor) {
                    super(seletor);
                }
                template(model) {
                    return `
      <div class="card col-sm-12 col-md-4">
        <div class="card-body text-center">
          <h5>Perder peso</h5>
          <p class="card-text">
            <span class="display-4 font-weight-bold">
              ${(model) ? parseFloat(model.calorias) - 500 : 0}
            </span>
            calorias
          </p>    
        </div>
      </div> <!-- /card -->

      <div class="card col-sm-12 col-md-4">
        <div class="card-body text-center">
          <h5>Manter peso</h5>
          <p class="card-text">
            <span class="display-4 font-weight-bold">
              ${(model) ? parseFloat(model.calorias) : 0}
            </span>
            calorias
          </p>    
        </div>
      </div> <!-- /card -->

      <div class="card col-sm-12 col-md-4">
        <div class="card-body text-center">
          <h5>Ganar peso</h5>
          <span class="display-4 font-weight-bold">
            ${(model) ? parseFloat(model.calorias) + 350 : 0}
          </span>
          calorias  
        </div>
      </div> <!-- /card -->
    `;
                }
            };
            exports_1("ConsultaView", ConsultaView);
        }
    };
});
