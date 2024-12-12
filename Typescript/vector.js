"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    // Constructor
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }
    // Implementación de los métodos
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    // Método para sumar dos vectores
    Vector.prototype.add = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para sumarlos.");
            return null; // Devolver null si no se puede realizar la operación
        }
        else {
            var resultElements = this.elements.map(function (value, index) { return value + v1.elements[index]; });
            return new Vector(resultElements.length, Math.max.apply(Math, resultElements)); // Crear un nuevo vector con la suma
        }
    };
    // Método para restar dos vectores
    Vector.prototype.subs = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para restarlos.");
            return null; // Devolver null si no se puede realizar la operación
        }
        else {
            var resultElements = this.elements.map(function (value, index) { return value - v1.elements[index]; });
            return new Vector(resultElements.length, Math.max.apply(Math, resultElements)); // Crear un nuevo vector con la resta
        }
    };
    // Método para multiplicar dos vectores
    Vector.prototype.mult = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para multiplicarlos.");
            return null; // Devolver null si no se puede realizar la operación
        }
        else {
            var resultElements = this.elements.map(function (value, index) { return value * v1.elements[index]; });
            return new Vector(resultElements.length, Math.max.apply(Math, resultElements)); // Crear un nuevo vector con el producto
        }
    };
    // Método para multiplicar el vector por un número
    Vector.prototype.multNumber = function (n) {
        var resultElements = this.elements.map(function (value) { return value * n; });
        return new Vector(resultElements.length, Math.max.apply(Math, resultElements)); // Crear un nuevo vector con el producto
    };
    return Vector;
}());
exports.Vector = Vector;
