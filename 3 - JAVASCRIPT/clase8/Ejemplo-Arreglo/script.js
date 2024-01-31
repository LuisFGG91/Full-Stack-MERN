const { map } = require("jquery");


var productos = ['cebolla','lechuga','cerezas','naranjas','manzana',0.3,1,true]
var precios = [1.5,.2,3.518181,.4,6.5];

console.log(precios);
console.log(productos);

console.log(precios[0]);
console.log(productos[0]);

productos.push('mandarina')
productos.pop()
console.log(productos);
console.log('contador de indices : ' + productos.length);


let myobjet = {
    name : 'Luis',
    age : 32,
    valor : true,
    dateB : '2022/02/10'

}
console.log(myobjet.name)
console.log(myobjet.age)
console.log(myobjet.valor)

const { name, age, valor } = myobjet

console.log(name);
console.log(age);
console.log(valor);




class Nodo{
    constructor(valor){
        this.valor = valor;
        this.siguiente  = null
    }
}
 let nodo1 =  new Nodo(1);
 let nodo2 =  new Nodo(2);
 let nodo3 =  new Nodo(3);
 nodo1.siguiente = nodo2
 nodo2.siguiente = nodo3

 console.log(nodo1)
 console.log(nodo2)



 let miVuelo = [
    ['a1','a2','a3'],
    ['b1','b2','b3'],
    ['c1','c2','c3'],
    ['d1','d2','d3'],
    ['e1','e2','e3'],
    ['f1','f2','f3'],
    ['z1','z2','z3'],
    ['s1','s2','s3'],
    ['g1','g2','g3'],
    ['h1','h2','h3'],
 ]
 console.log(miVuelo)



 let mymapa = new Map();

 mymapa.set('clave1', 'valor1');
 mymapa.set('clave2', 'valor1');
 mymapa.set('clave3', 'valor1');
 mymapa.set('clave4', 'valor1');
 mymapa.set('clave5', 'valor1');
 mymapa.set('clave6', 'valor1');


 console.log(mymapa);