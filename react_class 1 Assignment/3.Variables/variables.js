/*In programming, variables are bindings that we used to hold values.
You cannot just use any name you please for two reasons.
The first reason being there are rules guiding the variable names;
-Names can contain letters, digits, underscores, and dollar signs.
-Names must begin with a letter, a $ sign or an underscore (_) not numbers.
-Names are case sensitive (person is different from Person).
-Reserved words (JavaScript keywords) cannot be used as names.
The second reason is readability. The code will work but, difficult variable
names can make it especially difficult to read and keep track of 
in javascript the common practice for naming variables is using camelCase
the first letter of the first word isnt capitalized but the second one is
for example if i need a variable to hold a student's name
I can just say;*/
let studentName = "Johnson Monsin";
/*Very simple but still detailed and consise*/

/*In javascript there are 3 different ways of creating variables

-Let; this is the one we use nowadays for variables holding values that change
But the special thing about "Let" is that the values are block scope
So if i initialize a variable with let in a function and one with the same name outside
the function exist without mixing values. The variable in the function can
hold a completely different value than the one outside */
let workerID = "03/533521";
/*-Const; we use this to hold values that dont change or constants.
It is good practice to initialize every variable with "Const" first
before using let or var while programming to avoid issues. 
They are also block-scope. It is common practice to captitalize the 
variable names of constants*/
const GRAVFORCE = 9.81;
/*-Var; Just like "let" used for holding changing values
the only difference is that var isnt block scoped.
Var is not advisable to use since it can lead to seriou conflictions
that can take quite a while to fix*/
var churchName = "RCCG";
