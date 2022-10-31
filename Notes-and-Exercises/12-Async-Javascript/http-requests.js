/*
HTTP Request:

- MAke HTTP requests to get data from another server
- we can make these requests to API endpoints.

Api we will be using o practice on is JSONplaceholder.com
*/

/*
how to create a request.

- first we create a request object: request = new XMLHttpRequest();
- we can use this request object to send request to get data
  by using .open method.
  open method has 2 argument: 
1- 'GET' = to get data
2- the end point where we want to get data from. 
  we get end point from the jsonplaceholder site for this example
- the request is set up, now we know what type of request we want, from where to get the date, 
  and now we want to send this request
  we want to know if the request is complete, and how to access the data
we can track the request by attaching eventlistener called readystatechange, 
and this fires every time there is a change in the status/phases of the request.
the phases of request are 4 in total:

0 - unsent - client has been created open() not called yet.
1- opened - open() has been called.
2- headers_received - send() has been called, and headers and status are available.
3- loading - downloading: responseText holds partial data.
4- done - the operation is complete.

we can check the state of the request by logging request, request.readyState
and check in its properties the readyState number.

we can check the data by adding and if statement to log the data in the console
once the readystate is = 4.

now if have wrong endpoint address we still get 4, even though there is an error
in the request itself.(try modifying the endpoint address and log the request).

checking the status code will give us a better indication if everything is ok:
200 means everything is ok
300 means it is redirection request
400 client side errors like 404
500 server errors
so we can add to the if statetment the request.status ===200

*/

/*
now we can wrap the function in a variable= getTodos so we can use it whenever we need the data
we add inside the function a callback function so we can use to do other things with the data or errors we get

- inside the if statement we return the callback function, and inside it we add as arguments:
if everything is OK: 1- undefined= represent the err, 2- request.responseText = represent the data.  
if we get an error : 1- the error message = a string, 2 - undefined = no data.

now in the goTodos call, we add the err, data as arguments inside the callback function.
and we can do manythings with these, for example to console.log the data or the error message.

if(err) = if true= will check the callback function inside the if statement and look for tyhe arguments inside it
undefined is falsy, the string is true, so if there is an error the else if will get fired.

*/


/*
to try the async code, we add console.log() before and after the getTodos() function
we will see that all the 4 console.logs will be fired first then the getTodos() function.
which confirm that it is a sync code, the getTodos non blocking the code = starts now and can finish later

*/

const getTodos = (callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        // console.log(request, request.readyState)
        if(request.readyState === 4 && request.status ===200){
            callback(undefined , request.responseText);
        }else if(request.readyState === 4 ){
            callback('could not fetch the data', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/' );
    request.send();
    }


console.log(1);
console.log(2);   

getTodos((err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

console.log(3);   
console.log(4);   

