/*Destructing
This is a form of assignment that allows us to unpack iterable datatypes
that contain more than one value into other variables.
*/
const worker = {
  firstName: "Hannah",
  lastName: "Noel",
  serialNo: 156,
};
let { firstName, lastName, Id = "S/N" } = worker;
console.log(firstName);
console.log(lastName);
console.log(Id);
//The id has a default value of "S/N incase the value isnt found in the object"
//Below the value of lastName is assigned to name
//allowing us to use different variable names
let { lastName: name } = worker;
console.log(name);
//Those examples were for objects, now for arrays
const cars = ["Toyota", "Mercecdes-Benz", "Nissan", "Lambo"];
let [car1, car2] = cars;
console.log(car1, car2);
//to skip values just use commas
let [, , car3, car4] = cars;
console.log(car3, car4);
/*to assign specific postions use curly braces instead of block
then put the specific index inside block braces followed by a colon
and the preferred variable name
*/
let { [0]: firstCar, [3]: lastCar } = cars;
console.log(firstCar, lastCar);
//now for strings
let [letter1, letter2, letter3, letter4] = "Three";
console.log(letter1, letter2, letter3, letter4);
