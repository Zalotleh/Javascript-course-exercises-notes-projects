//  dates and times:
/*
dates in JavaScript are a type of data that fall under the object data type so that
objects essentially, which means that also reference types and not primitive types.

Now, dates can be really useful for many things in JavaScript from creating the date of a blog post
or sign updates to an event date, etc..

So in this chapter, we're going to learn all about how to create them, form them and do otherthings with them.

So how do we create a new date object?

Well, to do this we're going to use what's known as a constructor in JavaScript.
there's many types of constructors in JavaScript and they all essentially construct a certain object type. 
a constructor is going to generally create a new object for us.

So we're going to use what's known as the date constructor to create an object, a date object.

when we create a new date, it automatically assigns it the date of now, this moment in time when we
run the file So to do this, we say const now = new date().

the new keyword goes before a constructor, which is it looks a bit like a function because we invoke it
and essentially it is calling a constructive function to create this object.

But we put this new keyword in front of it to say we want a new object of this data type.
That's what this is do.

Now, if we log this to the console, we see this gigantic date.
OK, so this is the date now.

So then.

What if we want to check the type of this thing that we've just created?
Well, we can use the type of operator so they can log and then type of now.
So if that prevail now, we can see that it's an object.

So, the date and times fall under the object data type.
Alright, then.

So it might be that we don't always want this gigantic string of a date.
When we create a new date, we might just want certain things from it.

fortunately, the date object comes packed with methods that we can use to grab certain information
from it.
So what I'm going to do now is just show you a handful of these different methods.

*/
const now = new Date();

console.log(now)
console.log(typeof(now));

//  year, months, day. times:

console.log('get full year:', now.getFullYear());
console.log('get month:', now.getMonth()); // months in js is array with january is 0, feb 1, march 2 .. ect
console.log('get date :', now.getDate());
console.log('get day:', now.getDay()); // sunday is 0, monday 1, tuesday 2 .. ect
console.log('get hours :', now.getHours());
console.log('get minutes :', now.getMinutes());
console.log('get seconds :', now.getSeconds());

//  timestamps:

// the number of milliseconds since 1970:

console.log('time stamp',now.getTime());

// date strings:
// it show the time and date now in a string format: Sun Oct 16 2022
console.log(now.toDateString());

// 15:18:47 GMT+0200 (Central European Summer Time)
console.log(now.toTimeString());

// 10/16/2022, 3:18:47 PM
console.log(now.toLocaleString());


// working on time stamp:

// we can use the time stamp to create dates in the past

const before = new Date('February 1 2019 7:30:59');
console.log(before);

console.log(before.getTime());

// we can get the differenece between now and before:
const diff = now.getTime() - before.getTime()
console.log(diff)
console.log(now-before)

//  convert the difference in milliseconds to minutes

const mins = Math.round(diff/1000/60)

const hrs = Math.round(mins/60)

const days = Math.round(hrs/24)
console.log(`minutes: ${mins} ,hours: ${hrs} ,days: ${days}`)

//  converting timestamp into a date object:
// used a random timetstamp number
const timestamp = 116924728241;

convertedTimeStamp = new Date(timestamp);

console.log(new Date(timestamp));
console.log(convertedTimeStamp);

// result: Sat Sep 15 1973 08:05:28 GMT+0100 (Central European Standard Time)

console.log(convertedTimeStamp.toLocaleString())
// 9/15/1973, 8:05:28 AM

// date-fns:

/* it is a modern js data utility library, provides a comprehensive and simple toolset
 for manipulating js dates in browser and node js. www.date-fns.org.
in order to use this library in the project we add the cdn link in the thml file in a script tag inside the body tag
  <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>
*/

// if we want to check if the given date is today:
console.log(dateFns.isToday(now))
// output: true

const pastDate = new Date(54654321434);

console.log(dateFns.isToday(pastDate));
// output: false

// formating options:
console.log(dateFns.format(now, 'YYYY'));
// output: 2022
console.log(dateFns.format(now, 'MM'))
// output: 10

console.log(dateFns.format(now, 'MMM'))
// output: Oct

console.log(dateFns.format(now, 'MMMM'))
// output: Octobor

console.log(dateFns.format(now, 'dddd'))
// output: Monday

console.log(dateFns.format(now, 'Do'))
// output: 17th

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'))
// output: Monday 17th October 2022

//  comapring dates:

const before1 = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before1));
// output: over 3 years

console.log(dateFns.distanceInWords(now, before1, {addSuffix:true}));
// output: over 3 years ago