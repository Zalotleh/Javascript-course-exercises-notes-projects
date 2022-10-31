const scores = [10,30,15,25,50,40,5];

/*
Filter method:
if i retreive data from db and i want to filter out data out of the array.
it iterate on the array and perfrom a check on each item in the array.
*/

/*
this method is not distructive, 
so in order to see the result of the filter, we save the method in a variable
*/
const filteredScores = scores.filter(score=>{
        return score > 20;
})

console.log(filteredScores)

// another example:

const users = [
    {name:'shaun', premium:true},
    {name:'yoshi', premium:false},
    {name:'mario', premium:false},
    {name:'chun-li', premium:true},

];

const premiumUsers = users.filter(user=>{
    // return user.premium ===true;
    return user.premium;
})

console.log(premiumUsers)


/*
Map Method:
the map metjod takes an array and it maps that ito a completely new array.
iterates an array and returns an updated value for each item in the array 
and then pushes that updated value into a new arrayupdate a new value
*/

const prices = [20,10,30,25,15,40,80,5];

// const salePrices = prices.map(price=>{
//     return price/2;
// });


const salePrices = prices.map(price=>price/2);

console.log(salePrices);

// another example:

const products = [
    {name:'gold start', price:20},
    {name:'mushroom', price:40},
    {name:'green shells', price:30},
    {name:'banana skin', price:10},
    {name:'red shells', price:50},
];

const discountedProducts = products.map(product=>{
    if(product.price>30){
        // we are creating a new object here to not change the original one.
        // we dont use product.price = product.price/2 ; this will change the original object.
        return {name:product.name, price:product.price/2};
    }else{
        return {name:product.name, price:product.price};
    };
});

console.log(discountedProducts);


/*
Reduce Method:
differently from the filter and map methods in that it doesn't return necessarily a new array.
Instead, it can return any single value, which could be an array or it could be a number or a string.
But any value that you want based on the values in the array that we iterate over.
*/

/*
reduce has 2 arguments:

1-The call back function which has 2 arguments as well:
accumalotr: where the value can change based on what we want to do with the array value.
current: is the value of the arrays items.


2-we should also add an initial value for the accumulator, it is a second argument for the reduce method.
*/

// return how many numbers >50 in the array.
const scores1 = [10,30,60,25,70,90,20];

const result = scores1.reduce((accumalator, current)=>{
    if(current>50){
        accumalator++;
    }
    return accumalator;
}, 0)

console.log(result);

// another example:

const scores2 = [
    {name:'mario', score:50},
    {name:'yoshi', score:30},
    {name:'mario', score:70},
    {name:'chun-li', score:60},
    {name:'mario', score:50},
    {name:'yoshi', score:30},
    {name:'mario', score:70},
    {name:'chun-li', score:60},
    {name:'mario', score:50},
    {name:'yoshi', score:30},
    {name:'mario', score:70},
    {name:'chun-li', score:60},
    {name:'mario', score:50},
    {name:'yoshi', score:30},
    {name:'mario', score:70},
    {name:'chun-li', score:60},
];

// use reduce to add up the total score for mario:

const marioScore = scores2.reduce((acc, curr)=>{
    if(curr.name ==='mario'){
        acc+=curr.score;
    };
    return acc;
}, 0);

console.log(marioScore);


/*
Find Method:
return the first element which meets a certain condition
*/

const scores3 = [10,30,60,25,70,90,20];

const firstHighScore = scores3.find(score=> score > 20
);

console.log(firstHighScore);


/*
Sort Method:
to sort the items inside an array, or sorting objects inside an array:
*/

// example 1- sorting strings
// sort method doesnt return a new value, but it alters the original array, it distructive method.
const names =['mario','shaun','chun-li','yoshi','luigi'];

names.sort();
console.log(names);

// to get the reverse order of the items.
names.reverse()

// exmaple 2 - sorting numbers

const scores4 = [10,50,20,5,35,70,45];

scores4.sort();
console.log(scores4);
// output:  [10, 20, 35, 45, 5, 50, 70]
// this doesnt take the whole number, it sort the numbers based on the first digit.

// the below method will get the numbers sorted, the explanation for this method is at example 3 below.
scores4.sort((a,b)=>a-b)
console.log(scores4);


// example 3 - sorting objects
// sort the array to get the object with biggest score first:
const players = [
    {name:'mario', score:20},
    {name:'luigi', score:21},
    {name:'chun-li', score:50},
    {name:'yoshi', score:30},
    {name:'shaun', score:70},
];

/* to sort a complex object, we use a call back function inside the sort method
which will have 2 arguments a,b which represent any 2 consecutive object inside the array.

the first method below compares the 2 objects and return -1 if the first object score is bigger
and this will keep the bigger number first, becuase sort method keeps the smalles number first which in this case is the -1
and 1 if the 2nd object score is bigger so it will be switched. and zero if the object scores are equal.

*/

// players.sort((a,b)=>{
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1;
//     } else{
//         return 0;
//     }
// });


/*
the second method is doing the same thing but with much less code:
if the second object score is bigger we will get a positive number, and if it is smallr will get negative number

*/
players.sort((a,b)=>b.score - a.score);

console.log(players);


/*
Chain Array Method:
as long as the first method is returning an array and the other one is working on the array then we can chain them
*/

const products1 = [
    {name:'gold start', price:20},
    {name:'mushroom', price:40},
    {name:'green shells', price:30},
    {name:'banana skin', price:10},
    {name:'red shells', price:50},
];

// filter out any product is not > 20 in price then map it into a new array, formatted based on sale price

// const filtered = products1.filter(product => product.price>20);

// console.log(filtered);

// const promos = filtered.map(product=>{
//     return `the ${product.name} is ${product.price/2}$`;
// });


/*
a better way of doing this is by chaining 2 methods like below
we put each method is seperate line, and chain them
*/
const promos = products1
.filter(product => product.price>20)
.map(product=>`the ${product.name} is ${product.price/2}$`)

console.log(promos)
