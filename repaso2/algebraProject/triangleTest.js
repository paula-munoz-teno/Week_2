"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var vertex1 = new point_1.Point(3, 4);
var vertex2 = new point_1.Point(4, 4);
var vertex3 = new point_1.Point(0, 4);
var tri1 = new triangle_1.Triangle(vertex1, vertex2, vertex3);
console.log("las distancias de los lados del triángulo son:" + tri1.calculateLengthSides() +
    "cm");
