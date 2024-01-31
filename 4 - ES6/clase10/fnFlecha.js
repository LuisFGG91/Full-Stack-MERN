var sayHello = function (name) {
    console.log('Hello ' + name);
};


const sayHay = (name) => {
    console.log(`Hello ${name}`);
};

const sayHell = name => console.log(`Hello ${name}`);

/*
console.log(sayHello('Luis'));
console.log(sayHay('Luis'));
console.log(sayHell('Luis'));
*/

/*
var square = function (n) {
    return n * n;
};


console.log(square(2))


const squar = n => n*n;

console.log(squar(3))
*/

const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  *  
  * los corchetes se interpretan como la apertura del cuerpo de 
  * la función en lugar de corchetes para crear un objeto literal 
  */
const returnObj = () => ({ firstName: 'John', lastName: 'Wick' });
// rodear el retorno implícito entre parentesis resuelve el problema
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
/*
console.log(returnObjLonghand);
console.log(returnObj);
console.log(returnObjFixed);
*/


class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;

    }
}
var obj = new  Deck

console.log(obj)


