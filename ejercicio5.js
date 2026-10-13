// Solución del ejercicio N°5

const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, color, asesor, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.asesor = asesor;
    this.precio = Number(precio);

    this.mostrarInfo = function () {
        console.log(
            `Vehículo: ${this.marca} ${this.modelo} | Color: ${this.color} | Asesor: ${this.asesor} | Precio: $${this.precio}`
        );
    };

    this.pruebaManejo = function () {
        console.log(`El Vehiculo:${this.marca} Modelo: ${this.modelo} ha sido usado para una Prueba de Conducir.`);
    };

    this.aplicarDescuento = function (porcentaje) {
        this.precio = this.precio - (this.precio * porcentaje / 100);

        console.log(
            `Descuento aplicado con éxito. Nuevo precio: $${this.precio}`
        );
    };
}

const vehiculo1 = new Vehiculo(
    prompt("Marca del vehículo N°1: "),
    prompt("Modelo del vehículo N°1: "),
    prompt("Color del vehículo N°1: "),
    prompt("Asesor del vehículo N°1: "),
    prompt("Precio del vehículo N°1: ")
);

const vehiculo2 = new Vehiculo(
    prompt("Marca del vehículo N°2: "),
    prompt("Modelo del vehículo N°2: "),
    prompt("Color del vehículo N°2: "),
    prompt("Asesor del vehículo N°2: "),
    prompt("Precio del vehículo N°2: ")
);

const vehiculo3 = new Vehiculo(
    prompt("Marca del vehículo N°3: "),
    prompt("Modelo del vehículo N°3: "),
    prompt("Color del vehículo N°3: "),
    prompt("Asesor del vehículo N°3: "),
    prompt("Precio del vehículo N°3: ")
);

console.log("===============================");
console.log("Vehiculo N°1");
vehiculo1.mostrarInfo();
vehiculo1.pruebaManejo();
vehiculo1.aplicarDescuento(10);
console.log("===============================");

console.log("===============================");
console.log("Vehiculo N°2");
vehiculo2.mostrarInfo();
vehiculo2.pruebaManejo();
vehiculo2.aplicarDescuento(5);
console.log("===============================");

console.log("===============================");
console.log("Vehiculo N°3");
vehiculo3.mostrarInfo();
vehiculo3.pruebaManejo();
vehiculo3.aplicarDescuento(8);
console.log("===============================");