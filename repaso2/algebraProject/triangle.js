"use strict";
//RETO 5 
// 1. Dentro de la carpeta actual crear el fichero triangle.ts. Importar en dicho fichero la clase Point.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    //Constructor
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    // Implementación de los métodos
    Triangle.prototype.calculateLengthSides = function () {
        var distancia1 = this.vertex1.calculateDistance((this.vertex2));
        var distancia2 = this.vertex2.calculateDistance((this.vertex3));
        var distancia3 = this.vertex3.calculateDistance((this.vertex1));
        return [distancia1, distancia2, distancia3];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
