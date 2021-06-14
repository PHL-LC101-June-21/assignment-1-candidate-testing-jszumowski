const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = " "
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // I don't understand why you want is to ask for the candidateName twice. I asked for candidateName in part 1.1c because that's where it works. 
  //I'm going to ask about this during class today, and if I figure out why we are prompted to ask for candidateName twice, I will fix it and resubmit the assignment. Otherwise, the code operates the way it's supposed to so... 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  let candidateName = input.question("Enter your name: ");
  console.log("Hello, " + candidateName)
  askQuestion();
  let candidateAnswer = input.question(question)
    if (candidateAnswer === correctAnswer){
      console.log("That is correct")
    } else {
      console.log("That is not correct. Please learn astrofeminism and try again next year.")
    }
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