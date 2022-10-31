// rest parameter
/*
similar to *args, **kwargs in python, in javascript it is ...
*/

const double = (...nums)=>{
    return nums.map(num=> num*2)
}

const result = double(5,6,8,9,10)
console.log(result)

// spread synatx (array):

const people = ['shaun','ryu', 'luigi'];
console.log(...people)

const members = ['ziad','marcela', 'lukas', ...people];
console.log(members)

// spread syntax (object):

const objct = {name:'ziad', age: 41, location: 'madrid'}
console.log(objct)

//  this will get us a copy of the object,not a copy of the pointer
const objctClone = {...objct, job: 'software developer'}
console.log(objctClone)

// ----------------------------------------------------------------------

// Sets
/*
they are set of items, in {}, and it doesnt allow to repetition of the same item.
*/

//  we can use the Set() to eliminate repeated items inside an array:
// convert array to set then spread the set inside a new array.

const namesArray = ['lukas','dalia','lukas','marcela','ziad'];
console.log(namesArray)
//['lukas', 'dalia', 'lukas', 'marcela', 'ziad']

const namesSet = new Set(namesArray);
console.log(namesSet)
//{'lukas', 'dalia', 'marcela', 'ziad'}

const newNamesArray = [...namesSet]
console.log(newNamesArray)
//['lukas', 'dalia', 'marcela', 'ziad']

const shortHand = [...new Set(namesArray)]
console.log(shortHand)

/*
Set has its own method and properties:
.add(item) - can be chained
.delete(item)
.size - find out the size of the set
.has() - to find out if the set has an item - returns boolean
.clear() - remove all the items inside a set.
.forEach() - to iterate over it
*/

const ages = new Set();
console.log(ages)

ages.add(100);
ages.add(77).add(84);
ages.add(100); // it doeasnt allow to add an item twice.

console.log(ages);

ages.delete(77);
console.log(ages);

console.log(ages, ages.size);

console.log(ages.has(100));

ages.clear()
console.log(ages);

const alotlehs = new Set([
    {name: 'Lukas', age: 3},
    {name: 'Dalia', age: 1},
    {name: 'Marcela', age: 29},
    {name: 'Ziad', age: 41},
]);

alotlehs.forEach(otleh=>{
    console.log(otleh.name, otleh.age)
});

// ---------------------------------------------

// Sympols:

/*
it is a primitive data type, has a unique feature to create 2 identical objects
and these objects technically are diffrenet
*/

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne)
console.log(symbolTwo, typeof symbolTwo)

console.log(symbolOne === symbolTwo);


const ninja = {};

//  here the same key can be used to change the vlaue
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

// we are using the same symbol key to have 2 different items.
//  technically they are not the same
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
console.log(ninja[symbolOne], ninja[symbolTwo]);

//{age: 30, belt: 'black', Symbol(a generic name): 'ryu', Symbol(a generic name): 'shaun'}