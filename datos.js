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

 while (true){
 let contry = pickRandomValue(json);
 console.log(contry);
 if(contry.capital){
  break
};
};
});
function getRandom(limit){
  return Math.floor(Math.random()*limit)
};

function pickRandomValue(arr){
  return arr[getRandom(arr.length)];
};

//arreglo segundo

fetch(URL)
.then(response => response.json())
.then( json => {

 while (true){
 let contry = pickRandomValue1(json);
 console.log(contry);
 if(contry.capital){
  break
};
};
});
function getRandom1(limit){
  return Math.floor(Math.random()*limit)
};

function pickRandomValue1(arr){
  return arr[getRandom1(arr.length)];
};
//areglo tercerp
fetch(URL)
.then(response => response.json())
.then( json => {

 while (true){
 let contry = pickRandomValue2(json);
 console.log(contry);
 if(contry.capital){
  break
};
};
});
function getRandom2(limit){
  return Math.floor(Math.random()*limit)
};

function pickRandomValue2(arr){
  return arr[getRandom2(arr.length)];
};


//cuarto areglo
fetch(URL)
.then(response => response.json())
.then( json => {

 while (true){
 let contry = pickRandomValue3(json);
 console.log(contry);
 if(contry.capital){
  break
};
};
function getRandom3(limit){
  return Math.floor(Math.random()*limit)
};
function pickRandomValue3(arr){
  return arr[getRandom3(arr.length)];
};
});








export const data = [
 {
 pregunta:'de que paiis es la bandera',
 bandera: pickRandomValue3[numram].flags.png
 choices:[
  pickRandomValue[numram].name,
  pickRandomValue1[numram].name,
  pickRandomValue2[numram].name,
  pickRandomValue3[numram].name
 ],
 answer: pickRandomValue3[numram].name
},
{
 pregunta:'cual es la capital del siguente pais',
 bandera: pickRandomValue2[numram].capital
 choices:[
  pickRandomValue[numram].name,
  pickRandomValue1[numram].name,
  pickRandomValue2[numram].name,
  pickRandomValue3[numram].name
 ],
 answer: pickRandomValue2[numram].name
},
{
  pregunta:'de que paiis es la bandera',
  bandera: pickRandomValue[numram].flags.png
  choices:[
   pickRandomValue[numram].name,
   pickRandomValue1[numram].name,
   pickRandomValue2[numram].name,
   pickRandomValue3[numram].name
  ],
  answer: pickRandomValue[numram].name
 },
 {
   pregunta:'cual es la capital del siguente pais',
   bandera: pickRandomValue2[numram].capital
   choices:[
    pickRandomValue[numram].name,
    pickRandomValue1[numram].name,
    pickRandomValue2[numram].name,
    pickRandomValue3[numram].name
   ],
   answer: pickRandomValue2[numram].name 
  }
];