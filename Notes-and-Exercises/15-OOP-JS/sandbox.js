/*
we create an object for a user with object literal notation, includes:
username, email, login and logout.
now if we want to create another user using the same way 
then we copy and paste the whole code block and we call it userTwo, which is not efficient
*/

const user1 = {
    username:'ryo',
    email:'ryu@gmail.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
};

console.log(user1.username, user1.email);
user1.login()


// -------------------------------------------------------------
// Classes:

class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`)
        return this
    }
    logout(){
        console.log(`${this.username} just logged out`)
        return this
    }
    increaseScore(){
        this.score +=1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this
    }
}

const userOne =new User('mario', 'mario@gmail.com');
console.log(userOne)
// the 'new' keyword:
// 1- it creates a new empty object{}.
// 2- it binds the value of 'this' to the new empty object.
// 3- it calls the constructor function to 'build'  the object.

const userTwo = new User('luigi', 'luigi@gmail.com')
console.log(userTwo)

userOne.login()
userTwo.login()

userOne.logout()
userTwo.logout()

// -----------------
// chaining methods:

/* 
in order to chain methods we need to return the object by using return this.
js assigns undefined to the method if it doesnt return anything, so if we want to chain in this case
we cant chain a new method to undefined, and this is why we get an error.

we are returning this which mean we are returning the object instance that we created, we are
returning userOne or userTwo or whatever object we create, so we can chain on it

becuase to call a function we use the instance then the method: userOne.login(), now this must
has a value of the instance itself to consider it as an instance, and we can do this by returning this.

we dont have to return this, only if we want to chain methods.
*/
userOne.login().increaseScore().increaseScore().logout()
// mario just logged in
// sandbox.js:43 mario has a score of 1
// sandbox.js:43 mario has a score of 2
// sandbox.js:38 mario just logged out

// -----------------------------------------------------------------

// Class inheritcance (subclasses):
/*
class that inherits properties and methods from other classes
in ordewr to inherit the parent's class properties we need to add all the arguments inside
the constructor method, and  inside the 
    { 
    super(inherited properties);
    this.new property;
    }
*/




class Admin extends User{

    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }

    deleteUser(user){
        // comparing the u with user/ if the condition true then it will be deleted.
        users = users.filter (u => user.username != u.username)
        // users = users.filter((u)=>{
        //     return user.username != u.username
        // })
    }
}

/* filter method: it iterate over the items in the array, 
and if the item return true it keep that item in the array
 if retrun flase it delete it
*/

userThree = new Admin('shaun', 'shaun@gmail.com', 'javascript master')
console.log(userThree)
// Admin {username: 'shaun', email: 'shaun@gmail.com', score: 0, title: 'javascript master'}

//inherit the methods, example:
userThree.login()

let users = [userOne, userTwo, userThree]
console.log(users) 
// [User, User, Admin]

userThree.deleteUser(userTwo)
console.log(users)
//  [User, Admin]




// -----------------------------------------------

// constructor() under the hood:

/*
the class syntax is a sugar coat created recently to emulate the class syntaz in other oop languages.
*/

// Prototype model:
/*
if we create any object in js, then all the methods we can use on that object can be found on 
Prototype property, and we can use it by using .notation method.
below we defined the method inside the constructor method, so in console we can find the login method
outside the prototype property, now in js the best is to define this method inside the prototype, but why?
each object has __proto__ property and inside the property listed the object methods, now this proto property doesnt store
the methods but it point to the object prototype where the methods are stored.
now the same thing is applied to constructors where we can store the methods inside the proto property
and this will help in storing all the method in one place and will help us in prototyping inheritance.

how we can do it:

*/

function Player(username, email){
    this.username = username
    this.email = email
    // this.login = function(){
    //     console.log(`${this.username} has logged in`)
    // }
}


Player.prototype.login = function(){
    console.log(`${this.username} has logged in`)
}

Player.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
}



const playerOne = new Player('mario player 1', 'mario@gmail.com');
const PlayerTwo = new Player('luigi player 2', 'luigi@gmail.com');

console.log(playerOne, PlayerTwo)
playerOne.login()

// ----------------------------
// Prototype inheritance:
//  we dont have super() in constructor method so we need to call the parent class and pass in the parameters
//  instead we use Player.call(this,parameters)
function PlayerAdmin(username, email, title){
    Player.call(this, username, email);
    this.title = title;
}

//  to allow the child class to inherit the parent class's methods as well we"
//  we create a new object inside the the prototype and add the parents class prototype in it.
PlayerAdmin.prototype = Object.create(Player.prototype)

PlayerAdmin.prototype.deleteUser = function(player){

}

const Playerthree = new PlayerAdmin('shaun', 'shaun@gmail.com', 'javascript master');
console.log(Playerthree)

// ---------------------------------------------------------

// Built in Objects:

/*
all objects in js inherit methods from Object, is we type in console any object and expand the prototypes eventually
we will arrive at Object prototype.
*/

// ----------------------------
//  we are going to apply classes on the weather application:

