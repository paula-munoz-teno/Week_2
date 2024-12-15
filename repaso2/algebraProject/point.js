"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
//RETO 1
var Point = /** @class */ (function () {
    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
    //(si queremos que se modifique cada vez que se cree el objeto usamos param)
    //el constructor por defecto es público
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // Implementación de los métodos
    //GETTERS
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    //SETTERS
    Point.prototype.setnX = function (x) {
        this.x = x;
    };
    Point.prototype.setnY = function (y) {
        this.y = y;
    };
    //tostring
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    //RETO 2
    //distanceToOrigin
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    //calculateDistance
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(Math.pow((anotherPoint.x - this.x), 2) + Math.pow((anotherPoint.y - this.y), 2));
    };
    //RETO 3 
    Point.prototype.calculateQuadrant = function () {
        var num = 0;
        if ((this.x == 0) && (this.y == 0)) {
            num = 0;
        }
        else if ((this.x > 0) && (this.y > 0)) {
            num = 1;
        }
        else if ((this.x < 0) && (this.y > 0)) {
            num = 2;
        }
        else if ((this.x < 0) && (this.y < 0)) {
            num = 3;
        }
        else if ((this.x > 0) && (this.y < 0)) {
            num = 4;
        }
        return num;
    };
    //asignar = 
    //igualar ==
    //RETO 4 
    // 1. Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
    // como parámetro un array de objetos de la clase Point y devuelva una referencia al
    // objeto de dicho array que esté más cercano al punto actual.
    // NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
    // 2. Modificar el fichero pointTest.ts para probar este nuevo método.
    //REVISAR
    Point.prototype.calculateNearest = function (points) {
        var _this = this;
        if (points.length === 0) {
            console.log("No se proporcionaron puntos para calcular el más cercano.");
        }
        var nearestPoint = points[0]; //primer punto
        var minDistance = this.calculateDistance(nearestPoint); // Calcula la distancia al primer punto
        points.forEach(function (point) {
            var distancia = _this.calculateDistance(point); // Calcula la distancia desde el punto actual
            // Si la distancia calculada es menor que la distancia mínima encontrada
            if (distancia < minDistance) {
                minDistance = distancia; // Actualiza la distancia mínima
                nearestPoint = point; // Actualiza el punto más cercano
            }
        });
        return nearestPoint; // Devuelve el punto más cercano
    };
    return Point;
}());
exports.Point = Point;
