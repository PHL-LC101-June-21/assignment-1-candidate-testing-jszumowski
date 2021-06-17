const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let candidateAnswers = [];
let candidateAnswers1;
let candidateAnswers2;
let candidateAnswers3;
let candidateAnswers4;
let candidateAnswers5;
let correctAnswers = 0;
let questions = ['Who was the first American woman in space? ', 'Ture or False: 5 kilometers = 5000 meters. ', '(5+3)/2*10 = ', 'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];
let answers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("Enter your name: ");
  console.log("Hello, " + candidateName);
  // I figured it out! So, this is a function that we write here and then call upon later in the code to run! 
}

//function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //let candidateAnswer = input.question(question);
    //if (candidateAnswer.tolowerCase === correctAnswer.tolowerCase){
     // console.log("That is correct");
   // } else {
    //  console.log("That is not correct. Please learn astrofeminism and try again next year.");
    //}
//}

function askQuestions() { 
  let candidateAnswers1 = input.question(questions[0]);
  let candidateAnswers2 = input.question(questions[1]);
  let candidateAnswers3 = input.question(questions[2]);
  let candidateAnswers4 = input.question(questions[3]);
  let candidateAnswers5 = input.question(questions[4]);
  let candidateAnswers = [candidateAnswers1, candidateAnswers2, candidateAnswers3, candidateAnswers4, candidateAnswers5];
  //I feel like theres a cleaner way to do this? Like these 6 lines of code could be 1. 
  console.log(`Your answers: ${candidateAnswers}`,`\nCorrect answers: ${answers}`)
}
// I'm not sure if this is what they want this to look like? I would love to see the finished program and 

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade
  

  return grade;
}

function runProgram() {
  askForName();
  askQuestions();
  gradeQuiz();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};