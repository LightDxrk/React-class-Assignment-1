/**JavaScript modules help us break js code into multiple files
 * Using the import to get and export keywords
 */
/**When using html, this is how we import modules *
 *<script type="module">
import data from "./datacontainer.js";
</script>/
/**There are two types of exports; named; allow use to import multiple variables and functions 
 * and default exports to share a single variable or function*/
let multiply = function (x, y) {
  return x * y;
};
export let myAge = 20;
export let busSpeed = 200;
export default add; // default export
