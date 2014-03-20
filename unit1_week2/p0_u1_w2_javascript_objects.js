// I paired by myself on this challenge.
 
// Pseudocode
// 1.
//  SET secretNumber to 1
// 2.
//  SET secretNumber to 7
// 3.
//  SET password to "hello"
// 4.
//  SET password to "just open the door"
// 5.
//  SET allowedIn to true
// 6.
//  SET allowedIn to false
// 7.
//  SET members to array
// 8.
//  SET first value of members to "John"
// 9.
//  SET fourth value of members to "Mary"
// __________________________________________
// Write your code below.
secretNumber = 7;
 
password = "just open the door";
 
allowedIn = false;
 
members = ["John", "", "", "Mary"];
// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//
secretNumber = 7, password = "just open the door", allowedIn = false, members = ["John", "", "", "Mary"]; 
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
//  I had a good experience with this Test Driven-Development. While the concepts here were basic,
// I could see myself really enjoying a more challenging TDD. Refactoring the code by placing
// everything on one line condenses the code, but I think that in the future I would prefer
// everything to be on its own line. This exercise was a little bit confusing, at first it wasn't
// exactly clear what we were supposed to do. I'm sure next time there is a TDD it will make a lot
// more sense now that I've already done one.
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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)
 
assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)
 
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)
 
assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)
 
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)
 
assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)
 
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)
 
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)
 
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)