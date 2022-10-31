/* to connect firebase-forestore db to the backend we copy the code inside the </> sign
and register the app, then select User a <script> tage, then paste it in the html file.
*/

/*
we get the db collection and display it in the browser.
- we get the db const we created in html
- we use the collection() method with the collection name as string.
- we use get() to get the collection, this will return a promise
- so we use .then and get a snapshot of the collection
- snapshot in console, has docs which contains the documents object.
- we select item 0 and use data() method to get the actual data

*/

const ul = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('button')

const addRecipe= (recipe, id)=>{
    let time = recipe.created_at.toDate().toLocaleString();
    let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class='btn btn-danger btn-sm my-2'>Delete</button>
    </li>
    `;

    ul.innerHTML += html
}


const deleteRecipe = (id)=>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe=>{
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}
/*
include the collection data in html file
create li html template, inject the element data in it.
*/

// get documents

// db.collection('recipes').get().then(snapshot=>{
//     // when we have the data
//     // console.log(snapshot.docs[0].data())
//     snapshot.docs.forEach(doc => {
//         // console.log(element.id)
//         addRecipe(doc.data(), doc.id)
//     });
// }).catch(err=>{
//     console.log(err)
// })



//  creating real listener function:
/*
To update the UI automaticaly we can set up a real time listener.
onsnapshot - get a snapshot on each time there is a change on the db.
this snapshot accepts callback function, so we get a snapshot and
we grab the docchanges inside it, we iterate on this and check the change type
 if it is added we call the addRecipe(), if removed w call the deleteRecipe()
*/

db.collection('recipes').onSnapshot(snapshot =>{
    console.log(snapshot);
    snapshot.docChanges().forEach(change=>{
      const doc = change.doc;
      if(change.type ==='added'){
        addRecipe(doc.data(), doc.id);
      } else if(change.type ==='removed'){
        deleteRecipe(doc.id);
      }

    })
});

/*  if we want to unsubscribe from seeing the changes on the page we
assign the function to a const and we call it when we click on the unsubscribe button
- now if we add or remove a recipe, the changes will happen on db level, but we will not see it on the page
If we refresh the page we will see the changes 
*/

// const unsub = db.collection('recipes').onSnapshot(snapshot =>{
//     console.log(snapshot);
//     snapshot.docChanges().forEach(change=>{
//       const doc = change.doc;
//       if(change.type ==='added'){
//         addRecipe(doc.data(), doc.id);
//       } else if(change.type ==='removed'){
//         deleteRecipe(doc.id);
//       }

//     })
// });


// --------------------------------------------------

/*
we save the data to the db by:
-we add an event listener to the form
- prevent the default
- create a time stamp now.
create an object include the the title = inside it is the content typed inside teh form
and now data, but converted to firestore timestamp
- insert the object inside the db collection. this return a promise
so we add console log and error handler
- the change doesnt automatically loads on the page, so we need to refresh to see it


*/

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const now = new Date();
    console.log(form.recipe.value);
    newRecipe= {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    console.log(newRecipe)
    db.collection('recipes').add(newRecipe).then(()=>{
        console.log('recipe added')
    }).catch((err)=>{
        console.log(err)
    })
    
} )

// deleting data:
/*
to know which data we should delete we use the doc id in firebase, we need to attach
this id to each li, so we grab this id when we get the data, above in the addRecipe function
and we add it to the li html template.

then we grab the parentelement of the button, so when we click on the button we get the data-id
then we use if statement to compare the id attached to the li and the doc ids we have in db
then we delete it.
this will return a promise.
the change doesnt automatically loads on the page, so we need to refresh to see it
*/
ul.addEventListener('click', e=>{
    e.preventDefault()
    if(e.target.nodeName === "BUTTON"){
        const id = e.target.parentElement.getAttribute('data-id')
    
        db.collection('recipes').doc(id).delete().then(()=>{
            console.log('recipe deleted')
        });
    }

})

//  unsubscribe from database changes:


button.addEventListener('click', ()=>{
    unsub();
    console.log('unsubscribed from collection changes')
})