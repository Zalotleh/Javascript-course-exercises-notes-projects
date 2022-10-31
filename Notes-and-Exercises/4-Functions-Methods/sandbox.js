// Function declaration:

function greet() {
    console.log("Hello, this is a function declaration")
}

greet()



// --------------------
// function expression:
// Js allows us to use the variable name to call the cuntion, we use the variableName() to call it.
//  when we use the function expression it is important to add ; at the end of the expression };

const speak = function () {
    console.log(`using function expression`)
};

speak();
speak();


// if we use the function without function expression method, then JS allow us to call the function before the function being defined. this is called: HOISTING. 
// JS hoists the function at the top of the page, so you can call the function wherever within the page.

greetHoist()


function greetHoist() {
    console.log("Hello, I am hositing this function!");
}


// It is recommended that we use Function Expression most of the time. because Hoisting doesn't work with function expression.


// we can add a value in the function, by adding a parameter to the function, (name) is a parameter.
//  we can pass more than one parameter by adding a , in between the parameters.
//  w can assign a default value to the parameter, like time parameter below.

const greet1 = function(name, time='night') {
    console.log("Hello", name)
    console.log(`good ${time} ${name}`)
}

// "Ziad" is an argument.
greet1("Ziad")

// here we override the default value for the parameter with 'day':

greet1('Ziad', 'day')


// Return function:
//  console.log is saving the value of the function locally inside the function body and we cant use this value anywhere else.
//  like console.log(area) cant be used outside of the function body.
// instead we use return in order to use the function value outside of the function body. 

const calcArea = function(radius){
    // let area = 3.14* radius**2;
    // return area;

    return 3.14 * radius **2;
};

const area = calcArea(5)
 
// here we print out the area value in the console.
console.log(area)

//  the advantage of this is that we can take the area vlaue and use it in a different function for example:

const calcVol = function(area){
    return area+area;
};

const vol = calcVol(area)

console.log(vol)    


// Arrow Functions:

// we can use arrow functions to call the function.by removing cuntion word and use arrows instead...

const calcArea2 = (radius) =>{
    return 3.14 * radius **2;   
};

//  we can simplify this even more:
// if we have only one parameter we dont need a paranthesis.
// if we have only one simple return then we dont add the return word and we have it in one line as below:
const calcArea3 = radius => 3.14 * radius **2;

// if we have more than one parameter we need a paranthesis.
const calcArea4 = (radius, num=2) => 3.14 * radius **num;

//  in case of more complex function:
const bill  = function(products, tax){
    let total =0;
    for(let i = 0; i< products.length; i++){
        total += products[i]+ products[i] * tax;
    }
    return total;

}

console.log(bill([10,15,30], 0.2))

//  we can shorten it like below, we cant do anything more here becase wehave a complex block code:
const bill2 = (products, tax) =>{
    let total =0;
    for(let i = 0; i< products.length; i++){
        total += products[i]+ products[i] * tax;
    }
    return total;
}


// Difference between functins and methods:
// the difffernce between them is the way we invoke them and the way they are defined.
// the method is invoked by using the . notation, the function is invoked directly using the ().
// method is a function, associated to an object or data type like a string.

const name1 = 'ziad'

//  function:

const greet2 =  () => 'Hello';

let resultOne = greet2();
console.log(resultOne);

// methods:

let resultTwo = name1.toUpperCase();
console.log(resultTwo);


// Call back function:
// it is passing a function into another function:

const myFunc = (callbackFunc) =>{
    // do somthing
    let value = 50;
    callbackFunc(value);
};

// myFunc(function(value){
//     // do something
//     console.log(value);
// });

//  convert the function above into an arrow function:

myFunc(value => {
    // do somthing
    console.log(value);
});


// an example of call back function:
// we created an array of strings and we used the forEach method (similar to for i loop) for each element inside the array it calls the function and print 'hello' for each .
// then we added parameter to the function (person) to iterate over the array and get the element as well plus the hello word.
let people = ['mario', 'luigi', 'ryu', 'shaun','chun-li'];

people.forEach(function(person){
    console.log(`hello ${person}`);
});

// convert the above function to an arrow function:
// and we can add another parameter to the function, such as theindex of the element:

people.forEach((person, index) =>{
    console.log(`${index} hello ${person}`);
});

// now we can create a sepearte function to log the index and names and add it to the function:

const logPerson = ( person, index) =>{
    console.log(`${index} - hello ${person}`);
};

// here we created a call back function:
people.forEach(logPerson);

// to see the call back function in action:
/* 
in the html file we created ul tag and gave it a class= people.
we use forEach function to iterate through the array, and generate an html template for each element and utput that in the browser inside the ul.
*/

/*
we create an empty html variable and concat it with <li> including the array element=person.
now we will see the html code inside the console
*/

const ul = document.querySelector('.people');

const people1 = ['mario', 'luigi', 'ryu', 'shaun','chun-li'];

let html = ``;

people1.forEach(person => {
    // create html template
    html += `<li style="color:purple">${person}</li>`;
});

console.log(html);
/* the below is advanced topic, will learn it later.
 to ouptput the html code into the broswer we will inject the html in the browser:
we use the variable created above: 
const ul = document.querySelector('.people');

we take the html we created and inject it in the ul we created
*/

ul.innerHTML = html;