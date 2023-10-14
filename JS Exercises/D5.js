/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const orderPets = pets.slice();
console.log(orderPets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const orderPets2 = orderPets.slice();
console.log(orderPets2.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  let license = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const licenseChars = 3;
  const licenseNums = 5;
  for (let j = 0; j < licenseChars; j++) {
    const randChar = chars.charAt(Math.floor(Math.random() * chars.length));
    license += randChar;
  }
  for (let j = 0; j < licenseNums; j++) {
    const randNum = Math.floor(Math.random() * 10);
    license += randNum;
  }
  cars[i].licensePlate = license;
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const firstElement2 = cars[i].trims[0];
  justTrims.push(firstElement2);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const color = cars[i].color;
  const firstLetter = color.charAt(0);
  if (firstLetter === "b") {
    console.log(`Color ${color} therefore:`, "Fizz");
  } else {
    console.log(`Color ${color} therefore:`, "Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let num = numericArray[0];
let i = 0;
while (num !== 32) {
  console.log(num);
  i++;
  num = numericArray[i];
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const arrayPosition = [];

let position = null;
const alphabeth = "abcdefghilmnopqrstuvz";

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      position = alphabeth.indexOf("a");
      position++;
      arrayPosition.push(position);
      break;
    case "b":
      position = alphabeth.indexOf("b");
      position++;
      arrayPosition.push(position);
      break;
    case "c":
      position = alphabeth.indexOf("c");
      position++;
      arrayPosition.push(position);
      break;
    case "d":
      position = alphabeth.indexOf("d");
      position++;
      arrayPosition.push(position);
      break;
    case "e":
      position = alphabeth.indexOf("e");
      position++;
      arrayPosition.push(position);
      break;
    case "f":
      position = alphabeth.indexOf("f");
      position++;
      arrayPosition.push(position);
      break;
    case "g":
      position = alphabeth.indexOf("g");
      position++;
      arrayPosition.push(position);
      break;
    case "h":
      position = alphabeth.indexOf("h");
      position++;
      arrayPosition.push(position);
      break;
    case "i":
      position = alphabeth.indexOf("i");
      position++;
      arrayPosition.push(position);
      break;
    case "l":
      position = alphabeth.indexOf("l");
      position++;
      arrayPosition.push(position);
      break;
    case "m":
      position = alphabeth.indexOf("m");
      position++;
      arrayPosition.push(position);
      break;
    case "n":
      position = alphabeth.indexOf("n");
      position++;
      arrayPosition.push(position);
      break;
    case "o":
      position = alphabeth.indexOf("o");
      position++;
      arrayPosition.push(position);
      break;
    case "p":
      position = alphabeth.indexOf("p");
      position++;
      arrayPosition.push(position);
      break;
    case "q":
      position = alphabeth.indexOf("q");
      position++;
      arrayPosition.push(position);
      break;
    case "r":
      position = alphabeth.indexOf("r");
      position++;
      arrayPosition.push(position);
      break;
    case "s":
      position = alphabeth.indexOf("s");
      position++;
      arrayPosition.push(position);
      break;
    case "t":
      position = alphabeth.indexOf("t");
      position++;
      arrayPosition.push(position);
      break;
    case "u":
      position = alphabeth.indexOf("u");
      position++;
      arrayPosition.push(position);
      break;
    case "v":
      position = alphabeth.indexOf("v");
      position++;
      arrayPosition.push(position);
      break;
    case "z":
      position = alphabeth.indexOf("z");
      position++;
      arrayPosition.push(position);
      break;
  }
}

console.log(arrayPosition);
