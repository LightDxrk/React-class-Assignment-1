/*Javascript tenary operators are a much simpler way to have if else statements */
let age = 19;
if (age >= 18) {
  console.log("legal");
} else {
  console.log("Child");
}
age >= 18 ? console.log("legal") : console.log("child");
/*Both lines 2-7 and line 8 do the exact same thing
To use a tenary operator first write a condition down just like you would in an if statement "age>=18"
the question mark then comes after. Right after the question mark is the statement or return value if the condition
evaluates to true, followed by a colon then the statement or return value if the condition evaluates to false */
/**If i used return values instead of function i could just assign the value to a variable */
let legality = age >= 18 ? "legal" : "child";
console.log(legality);
