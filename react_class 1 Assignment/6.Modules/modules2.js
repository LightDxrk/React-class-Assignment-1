/**You can import modules into a file in two ways,if they are named exports or default exports.
Named exports are constructed using curly braces. Default exports are not. */
import { myAge, busSpeed } from "./modules.js"; // named exports
import multiply from "./modules.js"; //default exports
const result = multiply(5, 10);
console.log(myAge, busSpeed);
