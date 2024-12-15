import { Point } from "./point";

let coordenada:Point = new Point (3,4);
let coordenada2:Point = new Point (4,4);

console.log(coordenada.getX());
console.log(coordenada.getY());
(coordenada.setnX(5));
(coordenada.setnY(8));
console.log(coordenada.getX());
console.log(coordenada.getY());
console.log(coordenada.toString());
console.log(coordenada.distanceToOrigin());
console.log(coordenada.calculateDistance((coordenada2)));
console.log(coordenada.calculateQuadrant())


