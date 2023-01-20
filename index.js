
const { lookup } = require('dns');
var readlineSync = require('readline-sync'); //Using Package

var userName = readlineSync.question('Please,Enter Your Name: ');
console.log('\n Welcome  ' + userName + ' to The Quize Game Developed By Anas Ahmed  \n');

console.log("Instruction's :- \n \n ->Total questions are 10. \n \n ->You have to choose one correct option between 'a' and 'b' \n \n ->Type a or b to choose the option. \n \n ->Press Enter to go on next question. \n \n BEST OF LUCK :)  ");
console.log("__________________________________________________\n")


var score = 0; //Score


// data of Top Scorers (Using Array)
var topScorers = [{
  name: "Anas Ahmed",
  score: "10",
},

{
  name: "Muzammil Ahmed",
  score: "8",
},
{
  // name: "salman khan",
  // score: "8",
}]



// Quize (Using function and if else)
function quize(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right! ")
    score = score + 1;
  }

  else {
    console.log("You are wrong!")
  }
  console.log("Your current score is " + score)
  console.log("\n")
}

// Questions are (As Object)
var questionOne = {
  question: "Q.1) Who invented Telephone? \n a) Alexander Graham Bell \n b) Thomas Edison \n ",
  answer: "a",
}

var questionTwo = {
  question: "Q.2) The famous Eiffel Tower is in? \n a) Italy \n b) Paris \n",
  answer: "b",
}

var questionThree = {
  question: "Q.3) Which country is known as land of kangaroo? \n a) Africa \n b) Australia \n ",
  answer: "b",
}

var questionFour = {
  question: "Q.4) Which of the following has the largest eyes of all land mammals? \n a) Horse \n b) Camel \n",
  answer: "a",
}

var questionFive = {
  question: "Q.5) Which of the following plants is not capable of manufacturing own food? \n a) Algae \n b) Mushroom \n ",
  answer: "b",
}

var questionSix = {
  question: "Q.6) Which of the following city has highest historical monuments? \n a) Punjab \n b) Delhi \n",
  answer: "b",
}

var questionSeven = {
  question: "Q.7) The world famous 'Khajuraho' sculptures are located in? \n a) Madhya Pradesh \n b) Orissa \n ",
  answer: "a",
}

var questionEight = {
  question: "Q.8) Smallest of all the continents? \n a) Australia \n b) America \n",
  answer: "a",
}

var questionNine = {
  question: "Q.9) Which of the following Valleys is known as Paradise of Earth ? \n a) Kullu Valley \n b) Kashmir Valley \n ",
  answer: "b",
}

var questionTen = {
  question: "Q.10) Which of the following structures was built in the memory of soldiers who fought in world war 1 ? \n a) Vijay stambh \n b) India Gate \n",
  answer: "b",
}





// Array of Questions
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen,];

// for loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

  quize(currentQuestion.question,
    currentQuestion.answer)
}

console.log("\n Your final score is " + score + "\n");
// console.log("High Scorer are \n Anas \n ahmed ")


if (score > 7) {
  console.log("Congratulation " + userName + " You are the top scorer now with score = " + score);
  console.log("\n Send me the screenshot of your final score then your name will be in the top scorer list \n");
}
else {
  // highScores.map(score => console.log(score.name, ":", score.score));
  console.log("Better Luck Next Time! \n");

}
console.log("Top scorer's are :-");
topScorers.map(score => console.log(score.name, ":", score.score));

