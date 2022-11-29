export class UI{
 constructor(){}
/**
 * 
 * @param {string} text 
 */
 showQuestion(text){
  const questionTitle = document.getElementById('question')
  questionTitle.innerHTML = text;
 }
/**
 * 
 * @param {string[]} choices 
 */
 showChoices(choices, calback){
  const choicesContainer = document.getElementById('obsiones');
  choicesContainer.innerHTML= ''
  for(let i = 0; i < choices.length; i++){
   const button = document.createElement('button');
   button.innerHTML = choices[i];
   button.className = 'alasar rounded';
   button.addEventListener('click', () => calback(choices[i]));

   choicesContainer.append(button);
  };
 };

 /**
  * 
  * @param {number} score 
  */
 showScores(score){
  const quizEndhtm=`
  <h1>resultado</h1>
  <h2>tu conseguiste: ${score}</h2>
  `
  const element = document.getElementById("quiz");
  element.innerHTML = quizEndhtm;
 }
 /**
  * 
  * @param {number} currentIndex 
  * @param {number} total 
  */
 showProgres(currentIndex,total){
  const element= document.getElementById('proges');
  element.innerHTML = `Question ${currentIndex} of ${total}`;
 }
};