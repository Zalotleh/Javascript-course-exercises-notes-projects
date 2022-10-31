pTags = document.querySelectorAll('p');

pTags.forEach(ptag=>{
    if (ptag.innerText.includes('success')){
        ptag.classList.add('success');
    } else if(ptag.textContent.includes('error')){
        ptag.classList.add('error');
    }
})

/* using innerText will get us the visible text inside the p tags,,
if we have a hidden text the function will not see it,
for example if we add a span isnide the first p tag with style: display:none;
the error word will be invisible and the error class will not be add to it.
to solve this we use textContent , like this the class will be added 
regadless if the word is displayed or not
*/

