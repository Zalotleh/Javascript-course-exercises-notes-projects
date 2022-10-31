const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});


/*
in js when there is an eventlistener attached to a child, 
js will fire the  call back function for that child,
and will look up (bubble up) to check if the parent 
has an eventlistenere as well to fire it,
if the parent have eventlistener then js will fire 
the call back function there as well this is called event bubbling .
and sometimes we dont this to happen, we want the eventlistener 
fire the call back function for the child only.

we do that by using : stopPropagation() method, like below:
*/

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

/*
the above method is cost eneffective because we are attaching an eventlistener
to each li and this will effect the performance of the application.
and in case we add a new li we have to attach the eventlistener to it again.

in order to solve this we use the event delegation:
which we grab the parent, attach eventlistener to it,
we console log the event only, and click on the target item,
and inside the consol select the target node name inside the target event,
and then we use that name in tagName property and fire the function, like below:
*/

ul.addEventListener('click', event => {
//   console.log(event);
  console.log(event.target, event);
  if(event.target.tagName === 'LI'){
    event.target.remove();
  }
});