// @ts-check
import { questions } from "./questions.js";
import { Quiz } from "./Quiz.js";
import { UI } from "./UI.js";
/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */
const renderPage = (quiz, ui) => {
 if (quiz.isEnded()){
  ui.shoeScores(quiz.score);
 }else{
  ui.showQuestion(quiz.getQuestionIndex().text);
  ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) =>{
   quiz.guess(currentChoice);
   renderPage(quiz, ui);
 
  });
  ui.showProgress(quiz.questionIndex , quiz.questions.length);

 }
};
function main() {
 const quiz = new Quiz(questions);
 const ui = new UI();
 renderPage(quiz, ui);
};
main();