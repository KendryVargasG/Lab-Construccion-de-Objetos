// Solución del ejercicio N°4

function Libro(titulo, autor, pais, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.pais = pais;
    this.genero = genero;
    
    this.prestado = false;

    this.prestar = function () {
        if (!this.prestado) {
            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        }  else {
            console.log(`Alerta: El libro "${this.titulo}" ya está prestado.`);
        }
    };

    this.devolver = function () {
        if (this.prestado) {
            this.prestado = false;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        }  else {
            console.log(`Alerta: El libro "${this.titulo}" no se encontraba en estado de Préstamo.`);
        }
    };
}

const libro1 = new Libro(
    "Verónika decide morir",
    "Paulo Coelho",
    "Brasil",
    "Novela psicológica"
    
);

libro1.prestar();
libro1.prestar();

libro1.devolver();
libro1.devolver();