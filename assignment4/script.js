// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];

for (var x in names) {
  var firstLetter = names[x].charAt(0).toLocaleLowerCase();
  if (firstLetter == 'j') {
    byeSpeaker.speak(names[x]);
  } else {
    helloSpeaker.speak(names[x]);
  }
}
