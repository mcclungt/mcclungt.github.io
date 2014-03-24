// I worked by myself on this challenge
 
// Your mission description:

// 	Your hero arrives at a bridge. Unfortunately, this bridge
// is being guarded by a troll with a short temper. The only way to 
// defeat the troll is by guessing his favorite color. The troll is
// not very smart, but don't get too many guesses wrong!
// 
 
// Pseudocode

// CREATE var for hero with properties "name", "health", "xposition", "yposition", "damage",
// SET name to "Derpadil", health to 10, xposition to 5, yposition to 0, and damage to 2
// CREATE var for troll with properties "name", "health", "xposition", "yposition", "damage", "wrongGuesses", "enraged", "alive"
// SET name to "Oswald", health to 100, xposition to 5, yposition to 5, damage to 20, enraged to false, alive to true
// CREATE array with phrases for troll to say
// CREATE functions for say, move
// CREATE function to update how many guesses have been made, and have enemy say strings or become enraged
// 
// 
// Initial Code

var hero = {
	name: "Derpadil",
	health: 10,
	xposition: 5,
	yposition: 0,
	damage: 2
}

var troll = {
	name: "Oswald",
	health: 100,
	xposition: 5,
	yposition: 5,
	damage: 20,
	wrongGuesses = 0,
	enraged = false,
	alive = true
}

var trollPhrases = ["Whoz dat!?", "Huh?!?", "Hey!!!"];


function say(string) {
	if (Math.abs(hero["yposition"] - troll["yposition"]) < 3) {
		if (string.toLowerCase() == "yellow") {
			troll["alive"] = false;
			update();
			return "With a flash of light the troll explodes!";
		} else {
			troll["wrongGuesses"] += 1;
			update();
			return trollPhrases[troll["wrongGuesses"]];
		}
	} else {
		return "Nobody hears you!";
	}
}

function update() {
	if (Math.abs(hero["yposition"] - troll["yposition"]) < 2) {
		troll["enraged"] = true;
		return "Uh oh! Looks like you got too close! The troll attacks!";
	}
	if (troll["wrongGuesses"] > 2) {
		troll["enraged"] = true;
		return "Looks like you made him angry...";
	}
	if (troll["enraged"]) {
		if (troll["yposition"] > hero["yposition"]) {
			troll["yposition"] -= 1;
		} else {
			hero["health"] -= troll["damage"];
			update();
		}
	}
	if (hero["health"] <= 0) {
		return "Alas, you have been squashed."; //exit
	}
	if (troll["alive"] == false){
		return "Victory! The day is yours!"; //exit
	}
} 

function move(dir) {
	if (dir.toLowerCase() == "up") {
		hero["yposition"] += 1;
	} else if (dir.toLowerCase() == "down") {
		hero["yposition"] -= 1;
	} else if (dir.toLowerCase() == "left") {
		hero["xposition"] -= 1;
	} else if (dir.toLowerCase() == "right") {
		hero["xposition"] += 1;
	}
}

// Solution

move("up");
move("up");
move("up");
say("yellow");

// Refactored Code

//	I couldn't really see a way to refactor the code. The next step would be
// creating a collision map for the world so the player cannot step off the 
// bridge. After that I would build upon the engine so the troll would use a
// universal attack function (as well as the player). But in terms of the code
// necessary, I think I refactored it as much as I could. 
 
// Reflection

//  I really enjoyed this assignment. I've designed some simple games myself,
// and I really like to get in the mindset of how a game would organize information.
// The main gimmick of my mission is that there is a counter that keeps track of how many
// wrong guesses until the troll decides to attack. The only thing I didn't like about this
// assignment is that the scope of what I would require to create a full fledged engine
// grows rapidly with every feature I add. Given more time I would create a more streamlined
// system with better organization, but I had to cut it short into a very face-value program
// because of time constraints.