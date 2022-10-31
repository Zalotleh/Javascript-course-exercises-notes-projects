/*
Copy Event:

when we select a text and copy it, a mesage will be popped out in console:
*/

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy',()=>{
    console.log('OI, my content is copy right');
});

/*
Mouse Move event:

show the mouse coordination inside the box, when we move the mouse inside the box:
from the event object we can see the offsetX and offsetY of the mouse.
*/

const box = document.querySelector('.box');

box.addEventListener('mousemove', e=>{
    box.textContent =  ` offset x ${e.offsetX} , offset y ${e.offsetY}`;
});


/*
Wheel event:

whenw e scroll down the mouse we log the location of the mouse in the page
*/


document.addEventListener('wheel', e =>{
    console.log(e.pageX, e.pageY)

})

