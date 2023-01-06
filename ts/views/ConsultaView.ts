import { Consulta } from "../models/Consulta";
import { View } from "./View";

export class ConsultaView extends View<Consulta>{

  constructor(seletor: string) {
    super(seletor);
  }

  template(model?: Consulta | void): string {

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
          <h5>Ganhar peso</h5>
          <span class="display-4 font-weight-bold">
            ${(model) ? parseFloat(model.calorias) + 350 : 0}
          </span>
          calorias  
        </div>
      </div> <!-- /card -->
    `;
  }
}