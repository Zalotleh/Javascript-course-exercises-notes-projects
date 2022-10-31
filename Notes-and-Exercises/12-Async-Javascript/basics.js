/*
Async Javascript:

- governs how we perform tasks which take some time to complete, e.g. getting data from databse.
 # start something now and finish it later.
*/

console.log(1);
console.log(2);

setTimeout(()=>{
    console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);