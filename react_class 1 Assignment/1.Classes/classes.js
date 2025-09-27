//Classes in Object oriented programming are blueprints for objects
//In javascript they are created using the class keyword followed by the class name
//To give a class specific properties we use a method/function called a constructor
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
  intro() {
    //method
    console.log(`Hello I am ${this.name}, and i study ${this.course}`);
  }
}
/*in the braces of the constructor we have the properties that an object
 should possess. In the example above we used "this" to assign 
 the properties of that object to the values passed into the constructor 
 during the actual object initialization.
 The "this" keyword refers to any instance of the class, the actual object
 intro is a method, methods are functions that belong to classes
 To call a method we write the name of the object belonging to that class
 Followed by a "." then the method name with curly braces and any arguments if necessary
*/

/*To create an instance of a class, an object, we use the new keyword
followed by the class name with the constructor parameters in braces */
const student1 = new Student("Amaka", "Software Engineering");
student1.intro();
/*Asides from the constructor method we can add other methods to a class */
Student.prototype.write = function () {
  console.log("...writing");
};
student1.write();
