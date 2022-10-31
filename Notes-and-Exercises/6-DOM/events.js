/*
what we want to do now is react to a user interacting with the Web page.
And to begin with, we're going to react to a user clicking on the button.

Now, there's three steps involved to set this up:
First of all, we need to query the DOM to get the element where we expect 
the event to happen, which in this case is going to be the button.

The second thing to do is add what's called an event listener to the element,
an event listener actively listens for user events on a specific element.

The third step is to write a callback function, which will fire when 
that event happens, when a user clicks on the button.
*/

const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    console.log('you clicked me')
})

/* 
now we want to attach an eventlistener to ach item inside the list,
so that when user click on any Item, 
eventually  we are going to delete that from the to do list, 
now we dont know how to delete the item from a browser 
so we will just delete the text inside it or change its style.
*/

/*
we can use the iteration to grab the item and work on it like below:
*/
const items = document.querySelectorAll('li');


// items.forEach(item=>{
//     item.addEventListener('click', ()=>{
//         item.innerHTML = ''
//     })
// })

/*
of we can benfit from event object created in the DOM for that specific event
and grab the event target.
if console.log the event, and click on an item, in the console we will get 
the event's object, and we can see all the properties it has, such as the target.
if we console.log the target we will get the element we clicked on.

*** This is useful when we dont use forEach method and we dont have an iterator items.
so we can grab the elements without iterating over their parent.
*/

// here will add a line-through the text if we click on the item:
items.forEach(item=>{
    item.addEventListener('click', event =>{
        console.log(event);
        console.log(event.target);
        event.target.style.textDecoration = 'line-through';
    });
});