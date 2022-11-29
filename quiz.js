
import {questions} from './preguntas.js'
export class Quiz{
 Questionsindex= 0
 score= 0

 /**
  * 
  * @param {qustion[]} question
  */
constructor(question) {
 this.question=questions
}

/**
 * 
 * @returns {Question}
 */
getQuestionsindex(){
 return this.questions[this.Questionsindex]
}
isEnded(){
 return this.question[this.Questionsindex];
}
/**
 * 
 * @param {string} answer 
 */
guess(answer){

 if (this.getQuestionsindex().correctAnswer){
  this.score++
 }
 this.Questionsindex++
}
}