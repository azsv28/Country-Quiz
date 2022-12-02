export class UI{
 constructor() {};
 /**
  * 
  * @param {string} text 
  */
 showQuestion(text){
  const questionTitle = document.getElementById("question");
  questionTitle.innerText = text;
 };
 shoewebandera(capital, bandera) {
  
 }
 /**
  * 
  * @param {string[]} choices 
  */
 showChoices(choices, callback){
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = '';
  for (let i = 0; i < choices.length; i++) {
   const button = document.createElement("button");
   button.innerText = choices[i];
   button.className = "button";
   button.addEventListener('click', () => callback(choices[i]));
   choicesContainer.append(button);
  };
 };
 /**
  * 
  * @param {number} score 
  */
 shoeScores(score){
  const quizEndHTML =`
  <h1>resultado</h1>
  <h2>si quieres mas preguntas recarga la pajina.</h2>
  <h2>tu puntacion fue de: ${score}</h2> 
  `;
  const element = document.getElementById("quiz");
  element.innerHTML = quizEndHTML;
 };
 /**
  * 
  * @param {number} currentIndex 
  * @param {number} total 
  */
 showProgress(currentIndex, total){
  const element = document.getElementById("progress");
  element.innerHTML = `Question ${currentIndex} of ${total}`;
 };
};