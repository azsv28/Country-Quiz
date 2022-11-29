export class question{
 /**
  * 
  * @param {*} text 
  * @param {*} choices 
  * @param {*} answer 
  */
 constructor(text,choices,answer){
  this.text =text;
  this.choices =choices;
  this.answer =answer;
 }
 correcta() {
  return this.choices === this.answer;
 }
}

const Question = new question()
const Question1 = new question()