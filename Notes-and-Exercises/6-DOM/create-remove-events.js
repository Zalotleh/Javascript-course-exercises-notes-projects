
items = document.querySelectorAll('li');


/*
if we want to delete something from a webpage we use .remove() method.
*/

items.forEach(item=>{
    item.addEventListener('click', event =>{
        event.target.remove()
    })
});

// ---------------------------------------
// to add to the webpage:

/*
we want to add a new item if we click on the button.
first we need to add eventlistenere to the button
and grab the ul element to add inside it.
*/

// we can add item using innerHTML += like the below commented code

ul = document.querySelector('ul')
button = document.querySelector('button');

button.addEventListener('click', () =>{
    // ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    //  we created the element li using the DOM createElement method
    // and we set the text inside it.
    li.textContent = 'something new to do';
    //  now we need to insert it in the web page: 
    // append it to the parent item or preppend it to the parent item.

    // ul.append(li); // adds the item at the end.
    ul.prepend(li)
});