import Productos from "./main.js";

class Compra {
    constructor() {
        document
            .querySelector("#btnCostoPesos")
            .addEventListener("click", this.regresarPesos);
        document
            .querySelector("#btnCostoDolares")
            .addEventListener("click", this.regresarDolares);
    }

    regresarPesos() {
        let nombre = document.querySelector("#nombre");
        let cantidad = document.querySelector("#cantidad");
        let precioUnitario = document.querySelector("#precioUnitario");

        let compra = new Productos(
            nombre.value,
            Number(cantidad.value),
            Number(precioUnitario.value)
        );

        console.log(
            "El costo total en pesos es de " +
            compra.getCostoPesos()
        );
    }

    regresarDolares() {
        let nombre = document.querySelector("#nombre");
        let cantidad = document.querySelector("#cantidad");
        let precioUnitario = document.querySelector("#precioUnitario");

        let compra = new Productos(
            nombre.value,
            Number(cantidad.value),
            Number(precioUnitario.value)
        );

        console.log(
            "El costo total en dolares es de " +
            compra.getCostoDolares()
        );
    }
}

var m = new Compra();