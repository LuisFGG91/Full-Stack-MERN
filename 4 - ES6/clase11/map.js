const groceries = ["salsa", "merenge", "metal", "punk", "gitana", "andina"];

const groceryList = groceries.map(item => 
    
    `<li>${item}</li>`,
    console.log("no")
    
    );

console.log(groceries)
console.log(groceryList)


const values = [1, 2, 3, 4, 5];
console.log(values)

const evens = values.filter(val => val % 2 === 0);

console.log(evens)

const val = 'sa'
const musica = ["salsa", "merenge", "metal", "punk", "gitana", "andina"];
const mus = musica.filter(item => item.includes(`${val}`));
console.log(mus)


const valu = [1, 2, 3, 4, 5];
const oddCubes = valu.filter(val => val % 2 !== 0).map(val => val ** 3);
console.log(oddCubes)