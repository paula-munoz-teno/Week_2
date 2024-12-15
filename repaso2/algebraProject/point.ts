
//RETO 1
export class Point
{
    // Definición de atributos (qué atributos tiene la clase)
    private x: number;
    private y: number;

   

    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
    //(si queremos que se modifique cada vez que se cree el objeto usamos param)
    //el constructor por defecto es público

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
       
    }

    // Implementación de los métodos

//GETTERS
    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }


//SETTERS

public setnX(x:number):void{
        this.x = x;
    }

public setnY(y:number):void{
        this.y = y;
    }

//tostring
public toString():string{
    return  "(" + this.x + ","+ this.y + ")";
 }
 
public 


//RETO 2
//distanceToOrigin
public distanceToOrigin(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
}

//calculateDistance
public calculateDistance(anotherPoint: Point): number {
    return Math.sqrt((anotherPoint.x - this.x) ** 2 + (anotherPoint.y - this.y) ** 2);
}

//RETO 3 
public calculateQuadrant():number{
    let num = 0; 
    if ((this.x == 0)&& (this.y == 0)){
        num = 0;
    }
    else if ((this.x >0)&& (this.y > 0)){
        num = 1;
    }
    else if ((this.x < 0)&& (this.y >0)){
        num = 2;
    }
    else if ((this.x <0)&& (this.y<0)){
        num = 3;
    }
    else if ((this.x> 0)&& (this.y<0)){
        num = 4;
    }

    return num;

}

//asignar = 
//igualar ==



//RETO 4 
// 1. Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
// como parámetro un array de objetos de la clase Point y devuelva una referencia al
// objeto de dicho array que esté más cercano al punto actual.

// NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.

// 2. Modificar el fichero pointTest.ts para probar este nuevo método.

//REVISAR

public calculateNearest(points: Point[]): Point {
    if (points.length === 0) {
        console.log("No se proporcionaron puntos para calcular el más cercano.");
    }

    let nearestPoint: Point = points[0]; //primer punto
    let minDistance: number = this.calculateDistance(nearestPoint); // Calcula la distancia al primer punto

    points.forEach(point => {
        let distancia = this.calculateDistance(point); // Calcula la distancia desde el punto actual

        // Si la distancia calculada es menor que la distancia mínima encontrada
        if (distancia < minDistance) {
            minDistance = distancia; // Actualiza la distancia mínima
            nearestPoint = point; // Actualiza el punto más cercano
        }
    });

    return nearestPoint; // Devuelve el punto más cercano
}








}


