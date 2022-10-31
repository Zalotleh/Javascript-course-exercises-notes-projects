/*
if we want to get data from different API's or endpoints at the same time,
then we need to include these endpoint inside the open(), to do that we add
resource argument inside the getTodos, and inside the open().

Now if we want to call these endpoints but one by one, not all at once,
then we can make a call back function inside a call back function for each endpoint.
which is not best practice because we will have a call back function hell.
in order to avoid this we use Promises:
*/


/*
we will learn promise then we apply it to the getTodos
usually when we do promise we create a new promise: new Promise().
promise is basicallly something  which is going to take some time to do
the promise outcome will be one of 2 outcomes: the data or an error.

inside the promise api there are two built in functions called resolve and reject.
we add these 2 inside the promise function as arguments
*/

// Promise example:

const getSomething = () =>{
    return new Promise((resolve, reject)=>{
        // fetch data
        // if success we call the resolve()
        resolve('some data')
        // if error we call reject()
        reject('some error')
    });
}


/*
now when we call the getSomething(), we add .then() which is like:
thisfunction has a promise then we get the data or the error from that promise
So we add 2 functions inside then(): one for the date and once for the error.
*/
getSomething().then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
});

// there is a better way to write the above code:
/*
we use catch(): catching error for the second function
so we have .then() - inside it is  callback function to fetch the data, 
and .catch() - inside it a callback function to get the error message.
*/

getSomething().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
});

//  wee apply promise() at getTodos():
/* we just include the whole code inside the callback function of the Promise() */


const getTodos = (resource)=>{

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status ===200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            }else if(request.readyState === 4 ){
                reject('could not fetch the data');
            }
        });
        request.open('GET', resource );
        request.send();
    })

    
}



getTodos('luigi.json').then(data=>{
    console.log('promise 1 resolved',data);
    return getTodos('mario.json');
}).then(data=>{
    console.log('promise 2 resolved',data);
    return getTodos('shaun.json');
}).then(data=>{
    console.log('promise 3 resolved',data);
}).catch(error=>{
    console.log(error);
});

// getTodos('json/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('json/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('json/shaun.json', (err, data) => {
//         console.log(data);
//         });
//     });
//     });



// getTodos((err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });