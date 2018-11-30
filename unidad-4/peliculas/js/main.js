import Pelicula from "./Pelicula.js";

class Main {
    constructor() {
        document
            .querySelector("#btnAgregar")
            .addEventListener("click", this.agregar);
    }

    agregar() {
        let nombre = document.querySelector("#nombre");
        let genero = document.querySelector("#genero");
        let año = document.querySelector("#año");
        let duracion = document.querySelector("#duracion");

        let peliculaUsuario = new Pelicula(
            nombre.value,
            genero.value,
            Number(año.value),
            Number(duracion.value)
        );

        console.log(
            "La duración de la película " +
            peliculaUsuario.nombre +
            " es " +
            peliculaUsuario.getDuracionEnHoras() +
            " en horas "
        );
    }
}

var m = new Main();

var p1 = new Pelicula("Avengers", "Acción", 2017, 120);
var p2 = new Pelicula("Harry Potter");

console.log(
    "La duración de la película: " + p1.nombre + " es " + p1.getDuracionEnHoras()
);
console.log(p2);