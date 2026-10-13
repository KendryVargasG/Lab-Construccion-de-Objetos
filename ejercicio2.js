// Solución del ejercicio N°2

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function () {
        return `Hola, soy ${this.nombre}, un(a) ${this.especie} de ${this.edad} años y peso ${this.peso} kg.`;
    };
}

const mascota1 = new Mascota(
    "Luna",
    "Canin@",
    3,
    12
);

const mascota2 = new Mascota(
    "Milu",
    "Felin@",
    2,
    5
);

const mascota3 = new Mascota(
    "Isis",
    "Hamster",
    2,
    0.5
);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());