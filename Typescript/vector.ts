

export class Vector {
    // Definición de atributos
    private elements: number[];

    // Constructor
    constructor(n: number, k: number) {
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }

    // Implementación de los métodos
    public print(): void {
        console.log(this.elements);
    }

    // Método para sumar dos vectores
    public add(v1: Vector): Vector | null {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para sumarlos.");
            return null; // Devolver null si no se puede realizar la operación
        } else {
            let resultElements = this.elements.map((value, index) => value + v1.elements[index]);
            return new Vector(resultElements.length, Math.max(...resultElements)); // Crear un nuevo vector con la suma
        }
    }

    // Método para restar dos vectores
    public subs(v1: Vector): Vector | null {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para restarlos.");
            return null; // Devolver null si no se puede realizar la operación
        } else {
            let resultElements = this.elements.map((value, index) => value - v1.elements[index]);
            return new Vector(resultElements.length, Math.max(...resultElements)); // Crear un nuevo vector con la resta
        }
    }

    // Método para multiplicar dos vectores
    public mult(v1: Vector): Vector | null {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para multiplicarlos.");
            return null; // Devolver null si no se puede realizar la operación
        } else {
            let resultElements = this.elements.map((value, index) => value * v1.elements[index]);
            return new Vector(resultElements.length, Math.max(...resultElements)); // Crear un nuevo vector con el producto
        }
    }

    // Método para multiplicar el vector por un número
    public multNumber(n: number): Vector {
        let resultElements = this.elements.map(value => value * n);
        return new Vector(resultElements.length, Math.max(...resultElements)); // Crear un nuevo vector con el producto
    }
}