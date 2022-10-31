// first we need to create a server, using live server extension.
// on the index.html file we right click then open with live server to open the server page.
// if we write this : alert("hello, world"); in the brower console window we will get this alert message.
console.log(1)
console.log(2)


// let is for defining a variable
let age = 25;
let year = 2019;

// we can log many variables once by using comma
console.log(age, year);

//  if we want to change a variable we dont define the variable again by using let, we just write the variable name and assign a new value to it.
age = 30;
console.log(age);

// if we dont want the variable to be changed in the future we use const

const points = 100;
// points = 55;
// trying to change the const variable will give us an error: Assignment to constant variable.
console.log(points);


/* 
-we cant use spaces in variable
-we use camel case method to write a variable
-variables dont start with numbers
-we dont use keywords as variables name
*/


// Data types:
// numbers, string, bolean, null, undefined,object, symbol

// ---------------------------------------------------

// String
console.log("hello, world")

let email = " ziad@gmail.com"
console.log(email)

// string concatenation

let firstName = "Ziad";
let lastName = "Alotleh";
let fullName = firstName + " " + lastName
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length

let nameLength = fullName.length
console.log(nameLength)

// .length is not a method but it is a property, as it gives back a property of the variable


// string methods
let upperCase = fullName.toUpperCase()
console.log(upperCase)

//  common string methods

let emailAddress = "ziad@gmail.com"

// find the index of the last a in the string
let result = emailAddress.lastIndexOf("a")
console.log(result)

// .slice(0,10) slices from index 0 until index 10
let result1 = emailAddress.slice(0, 10)
console.log(result1)
// similar
let result2 = emailAddress.substring(4, 8)
console.log(result2)

// .replace replaces only the first "z" with "m", if there are more "z" it doesnt replace them.
let result3 = emailAddress.replace("z", "m")
console.log(result3)

// ---------------------------------------------------------

// Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi)
// math operators: +,-,*,/,**,%

console.log(
    10 / 2
)

let result4 = radius % 3
console.log(
    result4
)

let result5 = pi * radius ** 2
console.log(result5)

// order of operations: B I D M A S = Brackets , Indices, Division, multiplication, Addition, Substraction. 

// shorthands:
let likes = 10;
// likes = likes + 1;
// OR
likes += 1;
// OR
likes++;

// for deduction:
likes--;

likes += 5;
likes -= 5;
likes *= 2;
likes /= 2;

console.log(likes)

// NaN - Not a Number:
// when we try to make calculation with different date types.

console.log(5 * "hello")
// the resukt is NsN

let result6 = "the blog has" + likes + "likes"
console.log(result6)

// ------------------------------------------------------

// Template Strings:

const title = "Best reads of 2019"
const author = "Mario"
const likes1 = 30

// Concatenation way:

let result7 = "The blog called " + title + " by " + author + " has " + likes1 + " likes";
console.log(result7)

// Template string way:
// template string is by using back ticks ``

let result8 = ` the blog called ${title} by ${author} has ${likes1} likes`
console.log(result8)

// Creating html templates:
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes1} likes</span>
`;
console.log(html)

// ---------------------------------------------------------------

// Arrays:

let ninjas = [1, "ziad", "marcela"];
console.log(ninjas)

console.log(ninjas[1])

ninjas[1] = "Dalia"
console.log(ninjas[1])

console.log(ninjas.length)

let arrayMethod1 = ninjas.join()
console.log(arrayMethod1)

let arrayMethod2 = ninjas.join("-")
console.log(arrayMethod2)

let arrayMethod3 = ninjas.indexOf("marcela")
console.log(arrayMethod3)

let arrayMethod4 = ninjas.concat(["Ana", "Radu"])
console.log(arrayMethod4)

let arrayMethod5 = ninjas.push("Ali")
console.log(arrayMethod5)
console.log(ninjas)
// push() it adds a new value to the array, it returns the length of the array only
// push() is one of the methods that modifies the original array

let arrayMethod6 = ninjas.pop("Ali")
console.log(arrayMethod6)
console.log(ninjas)

// push() it pop out the last item from the array, it returns the item poped out.
// push() is one of the methods that modifies the original array

// ---------------------------------------------------------------

// Undefined:
// when we dont define a variable we 
let age1;
console.log(age1, age1 + 3, `the age is ${age1}`)
// the result of this: undefined NaN 'the age is undefined'
// the result of age1 = undefined
// the result of age1+3 = NaN (not a number)
// the result of ${age1}= undefined

// ---------------------------------------------------------------------

// NULL:

let age2 = null
console.log(age2, age2 + 3, `the age is ${age2}`)

// the result is = null 3 'the age is null'

// -------------------------------------------------------------------

// Boolean:

console.log(true, false)

let emailAddress1 = "ziadalotleh@gmail.com"
let checking = emailAddress1.includes("@")
// .includes() gives true or false results
console.log(checking)

let names = ["ziad", "lukas", "marcela", "dalia"]
let checking1 = names.includes("lukas")
console.log(checking1)
// ------------------------------------------------------------

// Comparison:
// return true or false

let age3 = 25
console.log(age3 == 25) // true
console.log(age3 == 30) // false
console.log(age3 != 25) // false
console.log(age3 > 20) // true
console.log(age3 < 15) // false
console.log(age3 <= 25) // true
console.log(age3 >= 30) //true

let name1 = "ziad"
console.log(name1 == "ziad") // true
console.log(name1 == "Ziad") //flas
console.log(name1 > "crystal") //true (first letter comes later in the alphabet z>c)
console.log(name1 == "Ziad") // true (lower case letter greater than upper case letter in js)
console.log(name1 == "Crystal") // true (lower case letter greater than any upper case letter in js)

// -------------------------------------------------------------------

// Loose vs Strict Comparison

// loose comparison uses double equal ==
// we can comparison an integer with string
let age4 = 25

console.log(age4 == 25) //true
console.log(age4 == "25") //true

// strict comparison uses triple equal ===
// the value must be exact type and value

console.log(age4 === "25") // false
console.log(age4 !== "25") // true

// -------------------------------------------------------------

// Type Conversion:

let score = "100"
score = Number(score)
console.log(score + 1)

// check the type of a value we use typeof
console.log(typeof score)

let score1 = 50
score1 = String(score1)
console.log(score1)
console.log(typeof score1)

let score2 = Boolean(1000) // true, any value except zero is true
console.log(score2)

let score3 = Boolean(0) // false
console.log(score3)

let score4 = Boolean("0") // true, any string with any value in it is true
console.log(score4)

let score5 = Boolean("") // false, empty string is false
console.log(score5)








