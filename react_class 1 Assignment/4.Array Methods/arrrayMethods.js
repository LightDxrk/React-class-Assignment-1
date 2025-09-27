/*Array methods refer to functions that are accessible by all arrays
because they are gotten from the array prototype. 
Arrays are just instances of the array prototype, hence all the 
functions/methods contained in the array prototype are accessible by them */
//Below are a few of the more common array methods;
let myArr = [1, 2, 3, 4, 5];
//forEach()
/*This method accepts a function as an argument(callback function).
The function is executed for each element in the array
The function itself then takes a variable as an argument
The variable represents the currentElement of the array the method is called to
There could be an optional second parameter which is for the index*/
myArr.forEach(function (x) {
  console.log(x * 5);
});
//map
/*This method accepts a function as an argument,
The array calls the function for each element and then return an array
with the values of the function call on each element  */
let newArr = myArr.map(function (x) {
  return x * 6;
});
console.log(newArr);
//join
/*this turns the array into a string by putting the elements together 
This join method optionally takes a seperator as an argument*/
let newArr2 = myArr.join("**");
console.log(newArr2);
//shift and unshift
/*shift; removes the first elements, moving all the other elements to a lower index
It returns the value of the elements that was removed
Unshift; add a new element that it takes as a parameter to the array
It returns the new array length as an argument */
let shiftArr = myArr.shift();
console.log(shiftArr);
console.log(myArr);
let unshiftArr = myArr.unshift(12);
console.log(unshiftArr);
console.log(myArr);
