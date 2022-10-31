/*
Dom: Document object model

-whenever the html document is loaded in the browser, the browser create an object
which models this document, and this object is called the document object.

* this object is created by the browser and it models the html page.

-it can take many different properties and many methods we can use to intercat with this object.
like remove an element, add something to the browser, we can do all these via the document opbject.
- we can see this object through the browser console: 
we type document in the console, press enter
we can access the document methods by: document. notation, for example document.location , document.URL

programatically the web page is modeled by the document object in console, and we can write js code and intercat with this document object
because we have access to this object through js code.
*/

/* 
the DOM sees our html page as a hierarchy tree of html tags:
html (root node) > head , body
head (node)> title (text node)
body (node) > h1 (text node), div(node)
div (node)> p (text node)
*/
// -------------------------------------------------------------------

// The Query Selector:

// if i want to reach and garb the first p tag in the html file:

// store the reference to the p element in a variable
//  querySelctor grabs the first element mentioned in () in the html doc.
const para = document.querySelector('p');
console.log(para);

//  if we want to grab the p tag with a class:
const para1 = document.querySelector('.error');
console.log(para1);

// to grab an element with the same class name:
const divError = document.querySelector('div.error');
console.log(divError);

/* An easy to get the element selector is: go to inspector, select the element 
 and in the Elements tab, right click on the element> Copy> Copy Selector and past it inside the js querySelector()
 */
 const selectorCopy = document.querySelector('body > div:nth-child(2)');
 console.log(selectorCopy);

//  To grab multiple elements, we use querySelectorAll()

const paras = document.querySelectorAll('p');
console.log(paras);
//  we will get an array of elements in the console, so we can for example select the first element:

console.log(paras[0]);

// or iterate over them:
paras.forEach(para => {
    console.log(para);
})

// another example:

const errors = document.querySelectorAll('.error')
console.log(errors)

// ----------------------------------------------------------------

//  Other ways to query the DOM:
// get an element by ID:


/*
we added an id for the h1 tag in html file.
we use getElementById  
 */

const title = document.getElementById('page-title');
console.log(title)

// get element by class name:

const errors1 = document.getElementsByClassName('error');
console.log(errors1)

/*
 * we will get a collection of element, the Nodelist we got from querySelectAll('.error') and this collection
 are similar by not identical, as we still get the element by indexing but we cant use forEach here.
 */

console.log(errors1[0]);

// if we try to use forEach we will get an error in the console
// errors1.forEach(error =>{
//     console.log(error);
// })

// get element by tag name:

const parag = document.getElementsByTagName('p');
console.log(parag);
//  we will get HTMLCollection as well.

/*
All of these different methods give us different ways to query the dome.
It doesn't much matter which methods you choose, but anything you can select with these methods, you
can also select with the queryselecte methods.
-the query selector or query select all because it's simple and very flexible
and you can query any element you need using them.

Also, it's useful to be able to use forEach directly on a node list which is returned by the query
Select a method, tag.
Tag and class both return collections which we can't directly use forEach on.
We'd have to convert these into arrays, first of all, which is just one extra step we can do without.
*/

// -------------------------------------------------------------------

// Change the text inside an element:

/*
we added a div in the html file with class= content.
to get the text inside an element we  use the innerText property like below.
and we can change the text as well as below
*/

const para2 = document.querySelector('p');
console.log(para2.innerText);

para2.innerText = 'Javascript is awesome';

para2.innerText += ' and aloe vera' 
// this change will appear on the browser only, not the html file.
//  to change the content of several elements at once:

const paras1 = document.querySelectorAll('p');

paras1.forEach(para=>{
    console.log(para.innerText);
    para.innerText += ' new text'
})
// ----------------------------------------------------------------------
//  Change the HTML for an element:
/*
if we want to change the html of an element So for example, 
we have this div with a class: content and it has a p tag inside it.
What if I want to grab this element right here, 
then I want to change the HTML inside it:
we use the innerHTML property to grab the html element inside it.
*/

const content = document.querySelector('.content');

console.log(content.innerHTML);

//  updating it:

content.innerHTML = '<h2> This is a new h2 html</h2>'

// append the content:

content.innerHTML += '<h3> This is a new h3 html</h3>'

/*
one more example:.
imagine we've gone out to a database and got a list or an array of people.
And what we want to do is output, a little HTML template for each of those people.
*/

const people2 = ['mario', 'luigi', 'yoshi'];

people2.forEach(person =>{
    content.innerHTML += `<p>my name is ${person}</p> `
})

// --------------------------------------------------------------------------------------
// Getting and setting attributes:

/*
i have created <a> html tag, this tag has an attribute href, to grab this attribute we use getAttribute() method
*/

const link = document.querySelector('a');

console.log(link.getAttribute('href'))

//  to change the attribute value:
link.setAttribute('href', 'https://wwww.example.com');
link.innerText = 'Link to www.example.com'

// another example, we will get the class attribute in the first p tag in the html file:

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'double-error')
console.log(mssg.getAttribute('class'));

// to add a new attribute to a tag, we use the same setAttribute() method.

mssg.setAttribute('style', 'color:green;')

//  this method will override the existing style, replace the existing style with the new one.
// if we want to change the style without overriding the exisiting one:

// here in the h1 title we added color style: orange.

const title1 = document.querySelector('h1');

console.log(title1.style)
// here we can see in the console that style has list of properties which we cna grab using the . notation

console.log(title.style.color)

// and we can change it as below:
title.style.color = 'crimson';
// add one:
title.style.border = 'solid 1px'

//  if we want to add a style which has - in the middle, we delete the - and use camelCase:

title.style.fontSize = '24px'

// to remove a style we update it with empty string '':

title.style.fontSize = '';

// ------------------------------------------------------------
// Addng and removing Classes:

// title.setAttribute('class', 'new-class')
// title.removeAttribute('class:new-clas')

/*
we added a new p tag with class: add-class.
to get the list of classes inside this tag we use classList property
  */
addClass = document.querySelector('.add-class');

console.log(addClass.classList)
/*  here we will get a DOMTokenList with all the classes, 
if we need to modify this list we have to use classList property then the . notation
*/ 
// to add a class:
addClass.classList.add('new-class')
// to remove a class:
addClass.classList.remove('new-class')

// now i am going to add the error class to it so i change it style:

addClass.classList.add('success')
// addClass.classList.add('error')

/* Chekc the add-remove-class htrml and js files for an example on changing style
based on the text isnide a p tag, using forEach()
*/

/* 
But what if we want to toggle a class?
So if an element has a class, we want to take it off.
If an element doesn't have the class, we want to apply it.
Well, we could use the toggle method.
*/

const title2 = document.querySelector('#page-title');
console.log(title2);
//  we add  a class:
title2.classList.toggle('test');
// and to remove it:
title2.classList.toggle('test');
// ------------------------------------------------------------------------

// Children,Parents, Siblings:

/*
created an article tag in the html file, which has p tags, 
now if we want to select all the tags inside it then apply a class to each element.
*/

const article =  document.querySelector('article');

console.log(article);

//  we use .children property to grab the children elements, we will get HTMLCollection

console.log(article.children);

/*we cant use forEach on the collection 
so we need to convert it into an array using Array.from() method
*/ 

console.log(Array.from(article.children));

Array.from(article.children).forEach(child=>{
    child.classList.add('article-element');
});

// we use .parentElement to grab the parent element:

const title3 =  document.querySelector('body > article > h2');
console.log(title3);

console.log(title3.parentElement);
// we can chain this to grab the parent of the parent element:
console.log(title3.parentElement.parentElement);

//  We use .nextElementSibling to grab the next sibling element:

console.log(title3.nextElementSibling);

//  We use .nextElementSibling to grab the previous sibling element:

console.log(title3.previousElementSibling);

// chaining

console.log(title3.nextElementSibling.parentElement.children);

// -----------------------------------------------------------------------

// Event Basics , Click Events: check the events html and js files

