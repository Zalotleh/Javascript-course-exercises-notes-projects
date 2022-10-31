/*
objects in js have properties and things they can do(methods)..

like blog object: 
-properties : title, content, author.
-methods: publish, unpublish, delete

there are built in objects like time, and we can create our own objects: object literal notation 
*/ 

// to create an object we assign it to a variable and use {}.
// add properties to the object: each property has a key and value.
// seperate properties by comma,

let user ={
    name:'ziad',
    age:30,
    email: 'ziad@gmail.com',
    location: 'Madrid',
    blogs: ['aloe vera is god plant', '10 things to do with a shoes'],
};

console.log(user);

//  if we want to access one property of the bject we use the . notation:
console.log(user.name);

// if we want o=to update one property value we call it using the . notation and assign it to teh new value
user.age = 35;
console.log(user.age);


// we can access and update a value of a property usinmg the sqaure bracket notation:
console.log(user['name'])

user['location'] = 'zanzibar'
console.log(user['location'])

/* usually we use the . notation but sometimes we need to use the bracket notation especially
when we assign the key to a variable and use it later on
*/ 

key = 'location'
console.log(user[key])
// if we use the dot notation now it will give us an error: undefined:
console.log(user.key)

// to check the type of the object we created:
console.log(typeof user)

// ---------------------------------------------------------------------------------
// now we add methods to the object:

let user1 ={
    name:'ziad',
    age:30,
    email: 'ziad@gmail.com',
    location: 'Madrid',
    blogs: ['aloe vera is god plant', '10 things to do with a shoes'],
    login: function(){
        console.log('the user logged in')
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlog(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

// and we call the method using the . notation and ().
//  it is the same as we used it to call the built in string's method: 
// const name = 'ziad' , name.toUpperCase()

user1.login();
user1.logout()
// -----------------------------------------------------------------------------
// this:
/*  now if we want to log the blogs item in the console, we need to access this blog property
we created a function name it logBlog
then we used this to access the object property's elements.
if we console.log(this) on the root document, outside the function and the object in this page
we will get a window object.
now we used it inside the function so it will represent the user object.,

we dont use the arrow function at the beggining because js will recognize 'this' as a global keyword
and it will get the window object instead.
so in order to use 'this' inside the method to refer the actual object which the method is on we need to use regular function
*/

user1.logBlog()
// there is better way of writing a methiod inside an pobject by removing the function word
// like in the logBlog method above.

// --------------------------------------------------------------------------------
//  Objects in Arrays:

/*
inside an array we can store objects
 */

const blogs = [
    {title:'aloe vera is god plant',likes:30},
    {title:'10 things to do with a shoes', likes: 55},
];

console.log(blogs)

let user2 ={
    name:'ziad',
    age:30,
    email: 'ziad@gmail.com',
    location: 'Madrid',
    blogs: [{title:'aloe vera is god plant',likes:30},
    {title:'10 things to do with a shoes', likes: 55},
    ],
    login: function(){
        console.log('the user logged in')
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlog(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};
user2.logBlog()

// --------------------------------------------------------------

// Math Objects: ready built in objects in js
//  we access the math object by typing Math

// Math object has several constant for example:
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

//  and also has methods:

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//  one use case for math object to generate random numbers:

const random = Math.random();
console.log(random);
// the number created is always between 0 and 1
//  if we want a random number between 1 and 100:
//  we take mthe random number const and round it to get rid of the decimals then * 100.
console.log(Math.round(random*100));

// --------------------------------------------------------------------
//  Primitive vs Reference Types:

//  primitive types: numbers, strings, bolleans, null, undefinmed, symbols
//  Reference types: all types of objects: object literals, arrays, functions, dates, all other objects.

//  the difference is how they stored and read in memory:
// - Primitive types are stored in a stack, quickers and the space is limited.
// - Reference types are stored in a heap, slower and the space is bigger.

/*
-when we store a variable in a stack and we call it, we access the variable name and the value of this
variable is called.
- when we store an object inside a variable, we link the variable name with a pointer inside the stack,
and this pointer is pointing to the object inside the heap.

* why this important to know:
when we create a variable and store it in the stack, then make a copy of it inside another variable
then later on change the first variable, what will happen is that the first variable will change and the copy will not.

while if we create an object and saved it in 2 different variable, and later on we change the object value
then both values inside the variables created will change.
because we are only making a copy of the pointer inside the stack, we dont create another copy of the object inside the heap.

lets see this in the code:
*/

// primitive values:

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// this will print: scoreOne: 50 scoreTwo: 50
//  now lets change scoreOne to 61:

scoreOne = 61;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// this will print: scoreOne: 61 scoreTwo: 50

// Reference values:

const userOne = { name: 'ziad', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo)

// this will print {name: 'ziad', age: 30} {name: 'ziad', age: 30}

userOne.age = 40;
console.log(userOne, userTwo)

// this will print {name: 'ziad', age: 40} {name: 'ziad', age: 40}
