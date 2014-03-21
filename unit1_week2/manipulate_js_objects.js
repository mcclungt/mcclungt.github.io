// This is a Solo Challenge. 
 
// There is a section below where you will write your code.
// Do not alter this object here.
 
 
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
  
  SET variable adam to new object

2. Give adam a name property with the value "Adam".
 
  SET variable adam name property to "Adam"

3. Add a spouse property to terah and assign it the value of adam.

  APPEND spouse property to terah and assign it adam
 
4. Change the value of the terah weight property to 125.

  SET terah wait property to 125
 
5. Remove the eyeColor property from terah.
 
  DELETE terah eyeColor property

6. Add a spouse property to adam and assign it the value of terah.

  APPEND spouse property to adam and assign it terah
 
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

  APPEND children property to terah
  SET children property to new object
 
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  APPEND carson property to terah's children property
  SET carson property to object
  APPEND name property to carson object
  SET name property to "Carson"
 
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
 
  APPEND carten property to terah's children property
  SET carter property to object
  APPEND name property to carter object
  SET name property to "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
  
  APPEND colton property to terah's children property
  SET colton property to object
  APPEND name property to colton object
  SET name property to "Colton"

11. Add a children property to adam and assign it the value of terah children.
  
  APPEND children property to adam
  SET children property to terah's children property
 
*/
 
// __________________________________________
// Write your code below.

var adam = {
  name: "Adam"
}
 
terah["spouse"] = adam;
 
terah["weight"] = 125; 

delete terah.eyeColor;

adam["spouse"] = terah;

terah["children"] = {
  carson: {
    name: "Carson"
  },
  carter: {
    name: "Carter"
  },
  colton: {
    name: "Colton"
  }
}

adam["children"] = terah["children"];

// Here is the same code refactored
var adam = {
  name: "Adam",
}

terah["spouse"] = adam, terah["weight"] = 125;
terah["children"] = {
  carson: {
    name: "Carson"
  },
  carter: {
    name: "Carter"
  },
  colton: {
    name: "Colton"
  }
}

adam["spouse"] = terah;
adam["children"] = terah["children"];

delete terah.eyeColor;

// __________________________________________
// Reflection: Use the reflection guidelines
// 
//  This TDD was definitely more engaging than the last one. My javascript syntax has been getting a little rusty, so this was a great
// refresher on the subject. I think I refactored my code as much as I could without just putting it on one line. It was a little bit
// finicky about the adam object being created before being set as a value to a property. I'm also unsure about my pseudocode. It seems
// short, but there isn't that much to say about all of the lines of code I'm writing. The wording on one of the questions was confusing,
// specifically the question relating to creating a carson object as the value to a children property. I figured it out, but it took me
// a few minutes of thinking.
//  
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
 
assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)
 
assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)
 
assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)
 
assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)
 
assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)
 
assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)
 
assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)
 
assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)
 
assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)
 
assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)
 
assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)
 
console.log("\nHere is your final terah object:")
console.log(terah)