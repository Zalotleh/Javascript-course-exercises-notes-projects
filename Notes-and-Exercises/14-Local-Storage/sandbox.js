/*
We've created two different projects now, and they both work with
some kind of data the todo list work with todos, which is a form of data.
And the Weatherup worked with location and weather data.

Now, in both of those projects, if we refresh the page at any point,
it would reset the application to their original states and it would not 
keep hold of any data We might have input to the website.

Now, sometimes we want to do that.
If a user crosses off the website and comes back later or just refreshes the page, 
it would be nice to keep or persist the data that a user input 
and then show it on the application again.

Now, how can we do that?
Well, to do that, we could do one of two different things.

-We could either set up a database on a server somewhere to store all of our data 
and then retrieve that data whenever we start up the Web application.

- Or we could use local storage to store data in which would mean with storing the data 
locally in the user's browser.And we can get that whenever our web up starts.

Local Storage API is stored on the window object, inside the browser.
if we type window in the console, and find localStorage property then 
expand it we will see the length = 0.
and we can see in Protoype the methods we can use like: clear, getItem, Key, removeItem,setItem

Local storage items have key and value, the value is stored as string
to use the data in different data types we can manipultae the data in the same way 
we do with json object.

*/

//  Store Data in local storage:
/*
to save data we use setItem(key, value) method
we can check the data in the Application tap inside the inspector
*/

localStorage.setItem('name', 'mario');
localStorage.setItem('age',50 );



// Get Data from local storage:
let name1 = localStorage.getItem('name');
console.log(name1);


// Update Data:

localStorage.setItem('name', 'luigi');

name1 = localStorage.getItem('name');
console.log(name1);

// OR

localStorage.age = 60;

let age = localStorage.getItem('age');
console.log(age);

// Deleting Data from local storage:

localStorage.removeItem('name')

//  remove all items:

localStorage.clear()


// Stringify Data:

/*
take complex data such as array and convert it into a string and save it on the local storage
*/

const todos = [
    {text:'Play mariokart', author:'shaun'},
    {text:'buy some milk', author:'mario'},
    {text:'buy some bread', author:'luigi'},
];

/*
first we convert this array into a json string, simply using JSON.stringify(object)
*/

console.log(JSON.stringify(todos))

// to save it in the local storage:
localStorage.setItem('todos', JSON.stringify(todos))

// Retrieve it and Parse the json data from local storage:

const data = localStorage.getItem('todos')
console.log(data)

console.log(JSON.parse(data))


// now we will apply this knowledge on the weather app, i made a copy here in chapter 14 folder.