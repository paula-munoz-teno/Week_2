

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
            let vectorResultado = new Vector(0,0);
            vectorResultado.elements = this.elements.map((value, index) => value + v1.elements[index]);
            return vectorResultado;
        }
    }

    // Método para restar dos vectores
    public subs(v1: Vector): Vector | null {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para restarlos.");
            return null; // Devolver null si no se puede realizar la operación
        } else {
            let vectorResultado = new Vector(0,0);
            vectorResultado.elements = this.elements.map((value, index) => value - v1.elements[index]);
            return vectorResultado
        }
    }

    
 // Método para multiplicar dos vectores
 public mult(v1: Vector): Vector | null {
    if (this.elements.length !== v1.elements.length) {
        console.log("Los vectores deben tener la misma longitud para multiplicarlos.");
        return null; // Devolver null si no se puede realizar la operación
    } else {
        let vectorResultado = new Vector(0,0);
        vectorResultado.elements = this.elements.map((value, index) => value * v1.elements[index]);
        return vectorResultado;
    }
}

    // Método para multiplicar el vector por un número
    public multNumber(n: number): Vector {
        let vectorResultado = new Vector(0,0);
        vectorResultado.elements = this.elements.map(value => value * n);
        return vectorResultado;
    }
}