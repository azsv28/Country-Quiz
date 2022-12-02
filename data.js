const URL = 'https://restcountries.com/v3.1/all'
function numram(min,max){
 return Math.round(Math.random()*(1+max-min)+min);
 min= Math.ceil(min);
 max=Math.floor(max);
};
console.log(numram(0,195));
//areglo primero
fetch(URL)
.then(response => response.json())
.then( json => {
 let contry
 let prim
 let dos
 let tres
 let cuat
 
 for (let i = 0; i< 5; i++) {
 while (true){
  contry = pickRandomValue(json);
  prim = pickRandomValue(json);
  dos = pickRandomValue(json);
  tres = pickRandomValue(json);
  cuat = pickRandomValue(json);
 console.log(contry, prim, dos, tres, cuat);
 if(contry.capital){
  break
 };
 };
 
   
   data[i].choices.push(contry.name.common);
   data[i].choices.push(prim.name.common);
   data[i].choices.push(dos.name.common);
   data[i].choices.push(tres.name.common);
   data[i].choices.push(cuat.name.common);
 
 }

 data[i].answer.concat()
});
function getRandom(limit){
  return Math.floor(Math.random()*limit)
};

function pickRandomValue(arr){
  return arr[getRandom(arr.length)];
};


export const data =[
 {
  question: "hola bienbenido quieres ver tus conosimientos sobre banderas?",
  choices: ["si es asi as clic aqui"],
  answer: "",
 },
 {
  question: "esta bandera a que pais le pertenese?",
  choices: [],
  answer: "",
 },
 {
  question: "cual de que pais pertenese esta capital?",
  choices: [],
  answer: "",
 },
 {
  question: "esta bandera a que pais le pertenese?",
  choices: [],
  answer: "",
 },
 {
  question: "cual de que pais pertenese esta capital?",
  choices: [],
  answer: "",
 },
];
