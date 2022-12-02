import {questions} from './pergunta.js'
import { Quiz } from './quiz.js'
import {UI} from './ul.js'

/**
 * 
 * @param {quiz} quiz 
 * @param {ui} ui 
 */

const renderpage = (quiz, ui) =>{
 if(quiz.isEnded()){
  ui.showScores(quiz.score);
 }else{
  
  UI.showQuestion(quiz.getQuestionIndex().text);
 
  UI.showChoices(quiz.getQuestionIndex().choices, (currentChoice) =>{
   quiz.guess(currentChoice);
   renderpage(quiz,ui);
 
  });
  UI.showProgres(quiz.Questionsindex + 1,quiz.question.length);
 }
}



function main(){
 const quiz = new Quiz(questions);
 const ui = new UI();
 
 renderpage(quiz, ui);
}
main();