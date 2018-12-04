export default class Compra {
    constructor(nombre, cantidad, precioUnitario) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }

    getCostoPesos() {
        let r = this.precioUnitario * this.cantidad;
        return r;
    }

    getCostoDolares() {
        let r = (this.precioUnitario * this.cantidad) * 0.049;
        return r;
    }
}