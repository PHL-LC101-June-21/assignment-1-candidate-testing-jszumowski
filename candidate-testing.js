const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateAnswer
let correctAnswer
let question //don't need these, but if I delete them the code doesn't run because of what's under line 66.
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateAnswers = [];
let correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
let questions = ['Who was the first American woman in space? ', 'Ture or False: 5 kilometers = 5000 meters. ', '(5+3)/2*10 = ', 'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("Enter your name: ");
  console.log("Hello, " + candidateName);
}

function askQuestions() { 
  for (let i = 0; i < 5; i++ ){
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade = 0

  for (let i = 0; i < 5; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      grade = grade + 1;
    }
  }
  let gradePercentage = ((grade / 5) * 100);
  let statusPassFail;
  if (gradePercentage >= 80){
    statusPassFail = "Pass";
  } else if(gradePercentage < 80){
    statusPassFail = "Fail";
  } else { 
    statusPassFail = "ERROR";
  }
  console.log(`>>>>>OVERALL GRADE: ${gradePercentage}% (${grade} out of 5 answers correct.)\n>>>>>STATUS: ${statusPassFail}`);
  return gradePercentage;
}

function runProgram() {
  askForName();
  askQuestions();
  gradeQuiz(candidateAnswers);
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