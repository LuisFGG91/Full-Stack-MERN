const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};


//const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];



/*

var firstAnimal = animals[0];
var secondAnimal = animals[1];
var thirdAnimal = animals[2];
*/




var password = person.password





/*


console.log(f)
console.log(s)
console.log(t)
console.log(f1)

console.log(hashedPassword)

*/
/*
const { addresses: [whiteHouse, sherlock] } = person;

console.log(whiteHouse)
console.log(sherlock)

const { addresses: [{ city: ciudad1 }, { city: ciudad2 }] } = person;
console.log('ciudad1 : ',ciudad1);
console.log('ciudad2 : ',ciudad2);






const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [...otherAnimals] = animals;


console.log(otherAnimals)



const { firstName, lastName, ...att } = person;


console.log(firstName)
console.log(lastName)
console.log(att)
*/


const personCopy = { ...person };

console.log(person)
console.log(personCopy)
console.log(personCopy === person)

console.log(personCopy.addresses === person.addresses)




