/*
Json= Javascript object notation.
we need to convert this data into js objects array in order to work on it,
fortunately in javascript we have an object that does that called JSON
and with its method parse().

below we can save the request.responseText in a vraible and parse it using JSON object
then add this variable inside the callback function again.
in the console we should see the results with js objects array created,
which now we can iterate on them and work on this data.
*/

/*
we can create out own json file following these rules:
- create file with json extension
- we dont need to add {}, as the json file already recognise the code as json. we use only [].
- the objects are inside {} with , seperate them.
- any string inside the object must have double quotes "", integeres and boolean dont.

and we add the relative path for the json file in the open()
*/


const getTodos = (callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status ===200){
            const data = JSON.parse(request.responseText)
            callback(undefined , data);
        }else if(request.readyState === 4 ){
            callback('could not fetch the data', undefined);
        }
    });
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/' );
    request.open('GET', 'todos.json' );
    request.send();
    }



getTodos((err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});