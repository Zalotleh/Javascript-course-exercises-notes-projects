// Fetch API:


fetch('luigi.json').then(response =>{
    console.log('resolved', response);
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});

/*
OK, and so far when we've been making HTP requests, we've been using the XML http request object to
do that and that is completely fine to do.
And many developers still use this way of working.
However, there is a newer and quicker way to make these requests using the native fech API, which
is now built right into the language.

Now, this is a fairly modern addition to the language and it's going to require us to write much less
code than the old way using the XML HTP request object.

And it's also going to implement the promise API under the hood, which is going to make handling success
and error cases easy to.


So we're going to use the newer native Thach API, which is just a function built right
into the language and we can call it by just saying fetch().
So it's as simple as that.

Now, in this function, we pass in an argument which is the resource that we want to fetch.
Now, that could be some end point to an API like the Jason Placeholder API we used before.
Or it could just be a local resource.

Now this returns towards a promise. And remember, a promise is basically saying, look,
 at some point I will either resolve if we have a success or reject if there's an error.

We can take on the dot then method to fire a function when we have a success case when the promise is
resolved.
And also a catch method which is going to fire a callback function when there is an error.
So we have these two functions, one for resolve and one for a reject.

Now, in the resolve of here, we can take a response object and in the reject case in catch, we can
take an error object.

OK then.

how the errors work with the Fetch API?

Now, if I just type on an S to the end of the resource to get an error, 
we can see we still get the error, but we get resolved and we get response.

So the way the Fetch API works is that the promise is only ever rejected when we get some kind of network
error.
For example, if we're offline or we can't reach the API for some reason.
So that's when we get a rejection.
If we just mistype out of here or the end point of the resource, then we don't get a rejection.
It's not rejected.
Instead, it's still resolved and we get the response.

However, in the response, if we expand that, we can see we have a status of 404, which
basically means the resource can't be found.
So, we could still do a check for the status to make sure it's 200 before we do something with
the data and then log out an error if we get for for something.
And that is the case for our own error.

But if there's a network error and we can't for whatever reason reach the resource, then it's going
to reject and we're going to fire this callback function.


And now we can see resolved and we get this response object.
And this object is something that the Fetch API creates for us when we go out and get data and return
to us this response object.
So now we can see the status is 200, the status text is OK, we can see the URL that we went to get
the data from, etc..
Now, one thing we can't see right here is the actual data that were returned.

Remember, we ultimately looking for this adjacent data and we can't see that anywhere inside here.

Now, if we open up the Proto,
This is where a lot of the methods are found inside an object.
We can see this method right here called Json.

So what we can do is use this method on the response object, and that actually gets us the data we need.
So inside here, when we get that response, we could say response.jason.
Now, this method right here gets us the data and it passes it much like before we used Json parse

response.json returns a promise.
So remember, a promise is something that typically takes a little bit of time to do and it can either
be rejected or resolved.

So if this is returned in a promise, what we could do is instead say return response.json().
So the overall value, the return value is this promise.

And since the overall value is now returning a promise, what we can do is stack on another then method
Now,, we can actually take the data that we get back from the Json method.

So this gives us the data that we need, the data that we went out to fetch.



So again, all you need to remember are the three steps.

First of all, we fetch the data, then we take the response and we return response.Json,
that returns a promise so we can stack .then to, and inside it we fire a function where
we actually have access to that data.
We can also catch any error at the end.

*/