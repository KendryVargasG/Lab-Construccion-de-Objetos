// Solución del ejercicio N°3

function Estudiante(nombre, edad,  curso, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.nota = nota;

    this.aprobado = nota >= 3.0;

    this.mostrarResultado = function () {
        if (this.aprobado) {
            console.log(`${this.nombre}, Edad: ${this.edad} años, aprobó el curso ${this.curso} con una nota de ${this.nota}.`);
        }   else {
            console.log(`${this.nombre}, Edad: ${this.edad} años, reprobó el curso ${this.curso} con una nota de ${this.nota}.`);
        }
    };
}

const estudiante1 = new Estudiante(
    "Jeison Zabala",
    31,
    "JavaScript",
    4.5
);

const estudiante2 = new Estudiante(
    "Ana López",
    28,
    "JavaScript",
    2.8
);

const estudiante3 = new Estudiante(
    "Kendry Vargas",
    27,
    "JavaScript",
    3.1
);

const estudiante4 = new Estudiante(
    "Layla Gaviria",
    24,
    "JavaScript",
    1.9
);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();