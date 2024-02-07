




console.log("end");

setTimeout(
    
    function () { 
        
        console.log("start")
        exampleFunction("NO son un buen curso");
    
    }, 10000);



var exampleFunction = function (message) {
    console.log(message);
};

exampleFunction("Sonn un buen curso");


//const arr = [1, 2, 3, 4];
//console.log(arr)
//arr.push(300); // a pesar de que arr se declara con `const`, aún podemos introducir nuevos valores 
//console.log(arr)
/*
const arr = Object.freeze([1, 2, 3, 4]);
console.log(arr)
arr.push(300); // ya no se nos permite cambiar `arr`
console.log(arr)
*/

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": "constant language from-rainbow" > false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

console.log(groceryList)


//const needThyme = [...groceryList, { "item": "thyme", "haveIngredient": false }];


const needThyme = groceryList.concat([{ "item": "thyme", "haveIngredient": false }]);
console.log('needThyme')
console.log(needThyme)
console.log('groceryList')
console.log(groceryList)

const gotTheThyme = [...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true }];

console.log('gotTheThyme')
console.log(gotTheThyme)

const notNeceCelery = [...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)];


console.log('notNeceCelery')
console.log(notNeceCelery)

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
items.sort(); // esto lanzará un error 



