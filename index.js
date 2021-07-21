//list of questions
var questions = [ questionOne = {
  question: `Let's start off easy, who is are part of Tapu Sena?
options: 
	[a] Tapu, Sonu, Goli, Gogi, and Pinku.
	[b] Tapu, Gogi, and Pinku
	[c] Tapu akela hi puri sena hai`,
	answer: "a"
},

questionTwo = {
  question: `What is Jethalal's father, Bapu ji's, real name?
options: 
	[a] Jayantilal Giridharlal Gada
	[b] Natwarlal Prabhashankar Udhaiwala 
	[c] Champaklal Jayantilal Gada`,
	answer: "c"
},

questionThree = {
  question: `Most evenings, the group gets together at a shop to discuss everything under the sun. What is the name of the shop?
options: 
	[a] Abdul's Soda Shop
	[b] Aao-Khao store
	[c] All-In-One General Store`,
	answer: "c"
},

questionFour = {
  question: `What is the name of the company where Popatlal works as a reporter?
options: 
	[a] Express Mail
	[b] Toofan Mail
	[c] Toofan Express`,
	answer: "c"
},

questionFive = {
  question: `Complete this line from the title song of the show: Problem toh hai sabke saath Bas ___ ki hai baat Taarak Mehta ka ooltah chashmah.
options: 
	[a] suljhane
	[b] nazariye
	[c] dekhne`,
	answer: "b"
},

questionSix = {
  question: `Other than being the society's secretary and a teacher, what is Bhide's side job?
options: 
	[a] He irons the clothes
	[b] He delivers the pickles and papad that his wife makes.
	[c] How does he even have the time to do a third job?`,
	answer: "b"
},

questionSeven = {
  question: `On which street is the Gokuldham society located?
options:
	[a] Powder gali, Goregaon East
	[b] Powder gali, Goregaon West
	[c] Yeh toh na ho paega`,
	answer: "a"
},

questionEight = {
  question: `What is the name of the bhojnalaya where Bagha and Natu Kaka have food?
options: 
	[a] Gujarati Bhojnalya
	[b] Padmini Bhojnalaya
	[c] Padmavati Bhojnalaya`,
	answer: "c"
},

questionNine = {
  question: `What is Krishnan Iyer's profession?
options: 
	[a] Reporter
	[b] Scientist
	[c] Teacher`,
	answer: "b"
},

questionTen = {
  question: `Which of the following shows had a crossover with Taarak Mehta Ka Ooltah Chashmah?
options: 
	 [a] C.I.D
	 [b] Bhabhiji Ghar Par Hain
	 [c] Kasuatti Zindagi Kay"]`,
	answer: "a" 
}
];

var rs = require("readline-sync");
const chalk = require("chalk");
var count=0;

// using function to make a quiz
function welcome()
{
	var userName = rs.question(chalk.cyan.bold("Enter your name:"));
	console.log("\n");
	console.log(chalk.yellow.bold("Welcome " + userName + " to the quiz of Taarak Mehta Ka Ooltah Chashmah!!!"));
	console.log("\n");
	var userPass = rs.question(chalk.cyan.bold("Enter password:"), {
  hideEchoBack: true});
	console.log("\n");
	console.log(chalk.yellow.bold("There's no negative marking. enjoy :)"));
	console.log(chalk.whiteBright.bold("--------------------------------------------------------------------------------------------"));
	console.log("\n");
}

function play(q , a)
{
	var ans=rs.question(chalk.blue.bold("Select option:"));
	
	if(ans.toUpperCase() === a.toUpperCase())
	{
		console.log(chalk.green.bold("YAY! Correct Answer"));
		console.log(chalk.whiteBright.bold("--------------------------------------------------------------------------------------------"));
		console.log("\n");
		count = count + 1;
	}
	else
	{
		console.log(chalk.red.bold("NAY! Wrong Answer"));
		console.log(chalk.whiteBright.bold("--------------------------------------------------------------------------------------------"));
		console.log("\n");
	}
}

function game()
{
	for(i = 0; i < questions.length; i++)
	{
		var currQ = questions[i];
		console.log(chalk.blue.bold(currQ.question));
		play(currQ.question , currQ.answer);
	}
}

// print the final score
function score()
{
	console.log(chalk.magentaBright.bold("Your score is : " + count));
	if(count === 10)
	{
		console.log(chalk.magentaBright.bold("WOW! Congratulations!!!"));
	}
	else if(count === 0)
	{
		console.log(chalk.magentaBright.bold("ALAS! Try harder next time"));
	}
	else
	{
		console.log(chalk.yellow.bold("You can do better."));
	}
}

welcome();
game();
score();