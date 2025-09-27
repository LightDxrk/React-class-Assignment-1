/*There are 3 ways to make functions in js 
Arrow functions are one of the them, and it's one of the shortest
ways to do so.
*/
let Function1 = (a, b) => a + b;
let Function2 = function (a, b) {
  return a + b;
};
console.log(Function1(2, 4));
console.log(Function2(2, 4));
/*Function 1 and Function2 do the exact same thing
Function 1 is an arrow function, it's similar to function expression
in function 2. When using arrow functions the first equal to sign is followed
by brackets which will contain parameters seperated by commas
the "=>" after the parameters is what the function will actually do
for shorter arrow functions the statement after the "=>" will be the return value
so we can omit return. Also, since it's on one line we also omitted the curly braces
which works but cannot be used with longer arrow functions*/

/*Arrow functions are not hoisted like regular functions so you can only use them
after it has been initialized. Arrow functions are not suitable 
to be object methods since you cannot use the"this" keyword with them, in
arrow functions there is no binding of "this"*/
