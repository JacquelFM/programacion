export default class Pelicula {
    constructor(nombre, genero, anio, duracion) {
        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.duracion = duracion;
    }

    getDuracionEnHoras() {
        let r = this.duracion / 60;
        return r;
    }
}

/*

Tarea:

"Carrito de compras"

-> Necesitamos tener un catálogo de artítulos
-> Crear clase productos
-> Esa clase producto va a tener: nombre del producto, cantidad y el precio unitario

Métodos:
    1. Regresar el costo total en pesos
    2. Regresar el costo total en dólares

HTML:
    *Formulario:
        -Nombre
        -Cantidad
        -Precio unitario
        -Botón:
            * Instancia de ese producto

-> Imprimir resultado en consola

*/