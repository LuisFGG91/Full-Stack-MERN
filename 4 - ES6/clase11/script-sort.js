
const items = Object.freeze(["carrots", "onions", "amparo", "celery", "mushrooms", "butter", "thyme"]);
//items.sort(0); // esto lanzará un error 


console.log('items')
console.log(items)


const sortedItems = [...items].sort();
console.log('sortedItems')
console.log(sortedItems);

const numbers = [10, 5, 3, 12, 22, 8, 111, .2, 9].sort();


console.log('numbers')
console.log(numbers);
// esto retornará [10, 12, 22, 3, 5, 8 ]


const sortedGroceries = [...numbers].sort((a, b) => a.item > b.item ? 1 : -1);
console.log('sortedItems')
console.log(sortedGroceries);