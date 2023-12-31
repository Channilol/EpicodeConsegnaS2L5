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

/* 
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
} */

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/*

pets.sort()

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
} */

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/* pets.reverse()

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
} 
 */

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/* const pet0 = pets.shift()
pets.push(pet0)

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}  */

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

/* const licensePlate = 23

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate;
}

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
} */

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

/* const quartoOggetto = {
  brand: 'Tesla',
  model: 'S',
  color: 'Rred',
  trims: ['70', '85', 'P85D'],
}

cars.push(quartoOggetto) 

console.log(cars)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
  console.log(cars[i])
} */

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

/* const justTrims = []

let trims1

for (let i = 0; i < cars.length; i++) {
  trims1 = cars[i].trims[0]
  justTrims.push(trims1)
}

console.log(justTrims) */

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* for (let i = 0; i < cars.length; i++) {
  cars[i].color.split("")
  if (cars[i].color[0] === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
} */

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

/* const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0

while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}
 */

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

/* const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = "abcdefghilmnopqrstuvz";
const positionsArray = []

for (let i = 0; i < charactersArray.length; i++) {
  const lettere = charactersArray[i];
  const index = alfabeto.indexOf(lettere);

  switch (index) {
    case -1:
      positionsArray.push(null);
    default:
      positionsArray.push(index + 1)
  }
}

console.log(positionsArray) */


/* OPPURE METODO PIù LUNGO

for (let i = 0; i < charactersArray.length; i++) {
  const alfabetoIndex = charactersArray[i];

  switch (alfabetoIndex) {
    case "a":
      alfabetoNumero.push(1);
      break;

    case "b":
      alfabetoNumero.push(2);
      break;

    case "c":
      alfabetoNumero.push(3);
      break;

    case "d":
      alfabetoNumero.push(4);
      break;
              
    case "e": 
    alfabetoNumero.push(5);
    break;

    case "f":
      alfabetoNumero.push(6);
      break;

    case "g":
      alfabetoNumero.push(7);
      break;

    case "h":
      alfabetoNumero.push(8);
      break;

    case "i":
      alfabetoNumero.push(9);
      break;

    case "l":
      alfabetoNumero.push(10);
      break;

    case "m":
      alfabetoNumero.push(11);
      break;

    case "n":
      alfabetoNumero.push(12);
      break;

    case "o":
      alfabetoNumero.push(13);
      break;

    case "p":
      alfabetoNumero.push(14);
      break;

    case "q":
      alfabetoNumero.push(15);
      break;

    case "r":
      alfabetoNumero.push(16);
      break;

    case "s":
      alfabetoNumero.push(17);
      break;

    case "t":
      alfabetoNumero.push(18);
      break;

    case "u":
      alfabetoNumero.push(19);
      break;

    case "v":
      alfabetoNumero.push(20);
      break;

    case "z":
      alfabetoNumero.push(21);
      break;
    
    default:
      alfabetoNumero.push(null);
  }
}

console.log(alfabetoNumero) */