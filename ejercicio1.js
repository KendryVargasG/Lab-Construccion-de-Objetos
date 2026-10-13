// Solución del ejercicio N°1

function Computador(marca, procesador, RAM, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.RAM = RAM;
    this.precio = precio;
}

const computador1 = new Computador(
    "HP",
    "Intel Core i5",
    8,
    2560000
);

const computador2 = new Computador(
    "Lenovo",
    "AMD Ryzen 7",
    16,
    3280000
);

const computador3 = new Computador(
    "Dell",
    "Intel Core i7",
    32,
    4550000
);

console.log(computador1);
console.log(computador2);
console.log(computador3);