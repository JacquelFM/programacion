class Pelicula {
    constructor(nombre, genero, anio, duracion) {
        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.duracion = duracion;
    }

    getDuracionEnHoras(){
        let r = this.duracion/60;
        return r;
    }
}

var p1 = new Pelicula("Avengers", "Acción", 2017, 120);
var p2 = new Pelicula("Harry Potter");

console.log(p1);
console.log(p2);