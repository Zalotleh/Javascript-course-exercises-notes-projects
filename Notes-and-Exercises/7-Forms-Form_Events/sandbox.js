/*
usually when we listen to a click on the button we attach the eventlistener to the button itslef
but in the case if we have a form we attach the eventlistener to the form itslef, becaus we are
submitting the whole form when we click on the submit button.

- if we attach the eventlistener to the form then any kind of submit event: click or press Enter button
will submit the form.
- if we attach thye eventlistener to the buttonn then only clicking the button will submit he form.
*/


/*
usually when we submit a form, the page gets refresh, we dont want this to happen so
we use preventDefault() method to disable the default action of this particualr event, which is refreshing the page
*/

/*
we want to get the data submitted by this form:
first we get a reference to the text field, using:
-the querySelector('#username') and get the value property
of this reference.
- Or we can grab the text input field using the form class name and . notation 
with the input id or name.
*/


/*
Regex:

if we ant to validate the input from users we use regular expressions, regex:
wwww.regex101.com , to check the regex.
basic : /^[a-zA-Z0-9]{6,10}$/
^ start with
[] characters go inside it
a-z accept small letter from a to z
A-Z accept capital letters from A to Z
{6,10} number of characters is beween 6 and 10
$ ends here.
*/
const form = document.querySelector('.signup-form');
// const username =  document.querySelector('#username');

form.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(username.value)
    console.log(form.username.value)
});

// ---------------
// Testing RegEx:



const username = 'ziad1212#';
const pattern = /^[a-z]{4,}$/;

let result = pattern.test(username);
console.log(result);

if (result){
    console.log('regex text passed');
}else{
    console.log('regex test failed');
};


/*
when we create a regular expression, it goes inside to forward slashes
So we write our pattern in between this.

So the first thing we want to check for is lowercase letters only.
So we'll do a character set to say A to Z lowercase letters.

Then we want it to be at least 4 characters long.
And this means at least 4 characters long and any length beyond that.

Let's test it:

Now in JavaScript, we can use a method called test on a pattern.
Then we use a regex method called test.
So this method takes in the value that we want to test.
Now we want to test the user name.
And what this is going to do is return a boolean, either true or false.
If it passes the test, then it's going to return True.
If it doesn't pass the test, it returns false.


But what now if we just start adding some letters and numbers and symbols at the start and the end of
this, is this still going to pass?
So it's still passing because we're looking for this pattern, which is a word, at least 4 characters long.
OK, so as long as it's in there somewhere, then it doesn't matter.
It's still going to pass.

Now, remember, the way we combat this is by putting a dollar sign at the end to say that this word
must be at the end of the string.
And we put a carrot sign at the start to say that this word must also be at the start.

So if we test this now, save it, we should get false.
And we're only going to get true now if the word is at the start and the end.


So this is a good little thing to add, because when a user type something into the field, they could
type in a valid username, but then follow it up with a load of junk like that.


Now there is another method we can use, in fact, there's a couple of different methods I'm going to show you one more.
*/

let result1 = username.search(pattern);
console.log(result1)


/* So we take the actual things that we're testing now right here.
The string before we took the pattern and we used a method on the pattern.
This time we're taking the string and we're using a method on the string.
So the method we use is search and we pass in the checks that we want to test against.


Now, what this does is return to is an integer and that integer is going to be the position at which
it finds this match.
And if we preview in a browser, we can see -1 and it's minus one because we don't get a match.
The position of the match is the first position in the string.

So this has its uses as well.

Imagine you're searching maybe a paragraph or something and you want to know the position in that paragraph
when a particular pattern is matched, this would be a good use case.

Now, most of the time, I'm going to be using the test method for input fields because I think that
works a little nicer.
*/

/*

So what I'd like, for example, is for the username to be between six and 12 characters in length and
only contain uppercase or lowercase letters, no numbers and no symbols.
So the first thing we need to do is get a handle on the actual value of the username.
then create a patren and test the username against the pattern using if statement

to provide a feedback to the user we added a div in the html form

 */
const form1 = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


form1.addEventListener('submit',e=>{
    e.preventDefault();

    // validation:
    const username = form.username.value;

    if(usernamePattern.test(username)){
        // feedback info
        feedback.textContent = " the user name is valid"
    } else{
        // feedback info
        feedback.textContent = "not valid username,the user name must have 6-12 character and only lowr and upper case letters"
    };
});


/*
we can provide an instant feedback to thge user while they are typing, using keyboard event
*/

// live feedback:

form.username.addEventListener('keyup', e=>{
    // console.log(e.target.value, form.username.value)

    if(usernamePattern.test(e.target.value)){
        form1.username.setAttribute('class','success')
    }else{
        form1.username.setAttribute('class','error')
    }
});
