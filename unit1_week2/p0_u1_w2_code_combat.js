// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// 	Mission 1: Rescue Mission
//	1.Pseudocode:
//		Move Down x2
//		Move Right
//		Move Up x2
//		Move Right x2
//		Move Down
//		Attack
//
//	2.Actual Code

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// 	Mission 2: Grab the Mushroom
//	1.Pseudocode:
//		Move Up
//		Move Right
//		Move Left
//		Move Up
//		Attack
//
//	2.Actual Code

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//	Mission 3: Drink Me
//	1.Pseudocode
//		Move Right
//		Attack
//		Move Right
//		Move Down
//		Move Up
//		Move Right x2
//		Attack
//
//	2.Actual Code

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//	Mission 4: Taunt the Guards
//	1.Pseudocode
//		Move Right x2
//		Move Up
//		Move Right
//		Say "Hey there!"
//		Move Down
//		Move Right
//		Move Up
//		Move Right
//
//	2.Actual Code

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//	Mission 5: It's a Trap
//	1.Pseudocode
//		Move Down x2
//		Say "Hey there!"
//		Move Up x2
//
//	2.Actual Code

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//	Mission 6: Taunt
//	1.Pseudocode
//		Say "xxx" xAsManyTimesAsItTakes
//
//	2.Actual Code

this.say("Hey!");
this.say("Nerd!");
this.say("Geek!");
this.say("Bum!");

//	Mission 7: Cowardly Taunt
//	1.Pseudocode
//		Move close to pack of Ogres
//		Say "hi"
//		Move back to safe spot
//		Rinse and repeat
//
//	2.Actual Code

this.moveXY(48, 30);
this.say("hi");
this.moveXY(70, 10);

//	Mission 8: Commanding Followers
//	1.Pseudocode
//		Say "follow me"
//		Move toward ogres
//		Say "attack"
//
//	2.Actual Code

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow me");
this.moveXY(60, 42);
this.say("Attack");

//	Mission 9: Mobile Artillery
//	1.Pseudocode
//		Move toward Groups
//		Attack Group A
//		Attack in between group and myself (for big ogres)
//		Repeat above for Group B
//
//	2.Actual Code

this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(45, 40);
this.attackXY(50, 67);
this.attackXY(47, 53);
this.attackXY(68, 55);
this.attackXY(56, 47);

//	PART 3: QUESTIONS
//
//	What is this referring to? Think programming-wise rather than in the terms of the game.
//
//	"this" is referring to this instance of a method or function.  So essentially, it's saying that the function say or moveXY should be applied to the object.
//
//	What does the () do in JavaScript?
//
//	() calls a function.  If there is something inside of the parentheses, then it uses those parameters and applies them to the function.
//
//  What is the point of the semicolons?
//
//	Semicolons act as the end of a line of code.  It tells javascript that the line is finished, and everything after the semicolon is the next line of code (until the next semicolon etc.).

// Reflection:
// Write your reflection here.
//		CodeCombat was a pretty fun way to get back into javascript.  While the challenges were pretty simple, I could definitely understand how someone who has never worked with programming before would be able to understand the concepts.  It seemed like the UI was a little out of proportion on my resolution, so it was a little bit difficult for me to read all of the directions on all of the levels, but overall I was impressed at the presentation.  While I feel that writing all the pseudocode and then actual code was a little bit tedious, I definitely understand why I was asked to do it.
