/* Spread operators(used by putting dots after an array/object "...array")
 have multiple use cases in javascript
-Allowing us to copy parts of an array/object into another array/object*/
const classOne = ["Daniel", "Bolu", "Fola"];
const classTwo = ["Chidinma","Kachi" ,"Bose" ];
const fullClass = [...classOne, ...classTwo];
console.log(fullClass);
//objects
const grades1 = {
  student1 : 50,
   student2 : 70,
  student3 : 60;
}

const grades2 = {
 student4 : 55,
  student5 : 40,
  student3 : 90
}

const fullGrades = {...grades1, ...grades2};
//They can also be used in destructing
const numbers = [11, 22, 33, 44, 55, 66];
const [first, second, ...remainder] = numbers;
console.log(first, second,);
console.log(remainder);


