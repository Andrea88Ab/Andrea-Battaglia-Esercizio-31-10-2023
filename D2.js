/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = parseInt(prompt("Inserisci il primo numero "));
let numero2 = parseInt(prompt("Inserisci il secondo numero "));

if (numero1 > numero2) {
  console.log("il numero 1 é piú grade");
}

  else if( numero2 > numero1){
    console.log("il numero 2 é piú grande");
  }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


let numero = parseInt(prompt("Inserisci un numero"));


if (numero !== 5) {
  
  console.log("not equal");

  
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = parseInt(prompt("inserisci numero"))

if (numero % 5 === 0 ){
  console.log("divisibile per 5");
}
else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1 = parseInt(prompt("inserisci il primo numero intero"))
let numero2 = parseInt(prompt("inserisci il secondo numero intero"))

if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 ){
  console.log("uno dei due numei é 8 o la loro addizzione/sottrazione é uguale a 8");
}
 else{
  console.log("nessuna condizione é soddisfatta");
 }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 70
let costoSpedizione = 10

if ( totalShoppingCart > 50){
  costoSpedizione = 0
}

let totaleAddebito = totalShoppingCart + costoSpedizione
console.log("Addebito totale " + totaleAddebito);





/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 70
let costoSpedizione = 10
let scontoBlackFriday= (totalShoppingCart / 100 )* 20

if( scontoBlackFriday > 50){
  costoSpedizione = 0
}

let totaleAddebito = scontoBlackFriday + costoSpedizione
console.log("addebito totale" + totaleAddebito );




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num1 = 10
let num2 = 5
let num3 = 8

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3)
  } else {
    console.log(num1, num3, num2)
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3)
  } else {
    console.log(num2, num3, num1)
  }
} else {
  if (num1 >= num2) {
    console.log(num3, num1, num2)
  } else {
    console.log(num3, num2, num1)
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero = prompt( "inserisci numero")
 console.log(`${numero} é ` + typeof);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 10
if(numero % 2 ===0)
console.log("il numero é par");
else{
  console.log("il numero é dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Minore di 5");
    } else {
      console.log("Maggiore di 10 ");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete skills.length


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri []
numeri = [1,2,3,4,5,6,7,8,9,10]
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numeri[numeri.length -1] = 100
console.log(numeri);

