import { Point } from "./point";
import { Triangle } from "./triangle";

let vertex1:Point = new Point (3,4);
let vertex2:Point = new Point (4,4);
let vertex3:Point = new Point (0,4);

let tri1:Triangle = new Triangle (vertex1, vertex2, vertex3);

console.log("las distancias de los lados del triángulo son:" + tri1.calculateLengthSides() + 
"cm");

