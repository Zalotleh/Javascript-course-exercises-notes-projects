// for loops

// the for loop has structur of for(declaration; condition;statement){action};
for (let i = 0; i < 5; i++) {
    console.log("in loop", i)
}

console.log("loop is finished")


//  we can iterate over a array of data, such as data comes from database

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// and we can display this data in html using the below code:

for (let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// -----------------------------------------------------

// While Loops
// Only keep the conditionthe insidethe bracket
// declaration outside the loop
// the statment is inside the code curly brackets.
// must add incrementation ex i++ to break the loop

let i = 0

while (i < 5) {
    console.log("in loop", i)
    i++
}

const names1 = ["shaun", "luigi", "mario"]

let y = 0
while (y < names1.length) {
    console.log(`in loop ${names1[y]}`);
    y++;
}

const names2 = ["shaun", "luigi", "mario"]

let x = 0
while (x < names2.length) {
    html = `<div>
<h2> this is a while loop</h2>
<p>
    <span> ${names2[x]}</span>
    </p>
    </div>`
    console.log(html);
    x++;
}

// -----------------------------------------------------------

// Do While Loop:
// asking the block of code to be executed regardless if the condition is false or not.
// if the condition is false the code block will execute only once.then it stops.
// if we make the value of g = 3, then the loop will run normally until it is false.

g = 5;
do {
    console.log("the value of g is:", g)
    g++;
} while (g < 5);

// ----------------------------------------------------------------------------

// IF statements:

const age = 21;

if (age > 20) {
    console.log("you are over 20 years old")
}


const ninjas = ["shaun", "luigi", "mario", "yushi"]

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas")
}


// -----------
// else , Else if:

const password = "pass1245656565";

if (password.length >= 12) {
    console.log(
        "this password is very strong"
    )
} else if (password.length >= 8) {
    console.log("that password is long enough")
} else {
    console.log(
        "the password is not long enough"
    )
}

// -----------------------------------------------------------------------------

// Logical operators
// OR = || // AND = &&
// OR operator can turn true if any of the conditions is true.
// And operator can turn true if both of the conditions are true.
const password1 = "pas@";

if (password1.length >= 12 && password1.includes("@")) {
    console.log(
        "this password is very strong"
    )
} else if (password1.length >= 8 || password1.includes("@") && password1.length >= 5) {
    // here the right side of the OR is considered as a one OR condition, so the password length can have >=8 OR (includes @ and length >=5)
    console.log("that password is strong enough")
} else {
    console.log(
        "the password is not long enough"
    )
}



// -------------------------------------------------------------------------

// Logical NOT: !
// imagin having a user variable and we want to run a condition when the user is not logged in
// if we say if(user=) the condition will not run as the if condition runs only when the value is true.
//  adding ! sign beside any true value will make it false and vice versa.

console.log(!true) // = false
console.log(!false) // = true

let user = false;

if (!user) {
    console.log(
        "you need to log in to continue"
    )
}

// -----------------------------------------------------------------------------------

// Break & Continue:

let scores = [50, 44, 0, 25, 100, 53, 74, 81]

for (let z = 0; z < scores.length; z++) {
    if (scores[z] === 0) {
        continue
    }

    console.log("the score is", scores[z]);

    if (scores[z] === 100) {
        console.log("Congrats you reached the top score 100")
        break
    }
}

// --------------------------------------------------------------------------------------------------

// Switch Statement:
// instead of using if else for multiple if else statement we can use switch
// swicth(variable){
// case "value": code block;  break;}
// we use break it stops if the condition is met, otherwise it will continue running to the rest of the cases.

const grade = "B";

switch (grade) {
    case "A":
        console.log("Your grade is A")
        break
    case "B":
        console.log("Your grade is B")
        break
    case "C":
        console.log("Your grade is C")
        break
    case "D":
        console.log("Your grade is D")
        break
    case "E":
        console.log("Your grade is E")
        break
    default:
        console.log("not a valid grade")
}
