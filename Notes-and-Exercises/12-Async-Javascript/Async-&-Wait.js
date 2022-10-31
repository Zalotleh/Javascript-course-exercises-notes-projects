// Async & Wait:

/*
a modern js feature, allows us to chain promises in a clean and better way.
To make any function asynchronous function, we just pop async right in front of the parentheses.

Now, this is known as an asynchronous function.

And whenever we call an asynchronous function, that always returns a promise regardless of what's inside

the await keyword stall js, it moves the code to another location
 to be processed while the browser processing the rest of the code

 so we fetch the data and get the response then we get the data from response using response.json().

 we can use the same 2 steps to chain fetching data from many endpoints.

 Now return the data doesnt actually return the data itself, but it returns a promise.
 any async function returns a promise.

 to get the date we call the function and we use .then and add the data inside the callback function.
*/

/*
to catch an error, we use if statement to check the status code, and throw a new Error, then catch it
when we call te function

*/

// fetch('luigi.json').then(response =>{
//     console.log('resolved', response);
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log('rejected',err);
// });

const getTodos = async () =>{
   const response = await fetch('luigi.json');

   if(response.status !==200){
    throw new Error('cant fetch the data')
   }
   const data = await response.json();
   return data
};


getTodos()
.then(data=> console.log('resolved data',data))
.catch(err=> console.log('rejected', err.message))



// const getTodos = async () =>{
//     const response = await fetch('luigi.json');
//     if(response.staus !==200){
//      throw new Error('cant fetch the data')
//     }
//     const data1 = await response.json();
 
//     const response2 = await fetch('marios.json');
//     if(response2.staus !==200){
//      throw new Error('cant fetch the data')
//     }
//     const data2 = await  response2.json();
//     return {data1, data2}
//  };
 
 
//  getTodos()
//  .then(data=> {
//      console.log('resolved data1',data.data1)
//      console.log('resolved data2',data.data2)
//  }).catch(err=> console.log('rejected', err.message))
 