import { ConsultaController } from "./controllers/ConsultaController";

const controller = new ConsultaController();

const form = <HTMLFormElement>document.querySelector('form');
form.addEventListener('submit', controller.calcula.bind(controller));