// DEFINISCO LA FUNZIONE PER GENERARE UN NUMERO RANDOM
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
// DEFINISCO LA FUNZIONE NUMERO PARI O DISPARI
function pariOrNot(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var somma = num1 + num2;
  if (somma % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// chiedo all'utente di scegliere tra pari e dispari
var sceltaUtente = prompt('Scegli pari o dispari');
// controllo l'input dell'utente
if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
  alert('Inserisci un valore corretto');
} else {
  console.log('Hai scelto ' + sceltaUtente);
  // chiedo all'utente di scegliere un numero tra 1 e 5
  var numeroUtente = prompt('Scegli un numero da 1 a 5');
  // controllo il numero inserito
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5 || numeroUtente.length > 1) {
    alert('Inserisci un numero da 1 a 5');
  } else {
    console.log('Il tuo numero è ' + numeroUtente);
    // il computer genera un numero randomico
    var numeroComputer = randomNumber(1, 5);
    console.log('Il numero del computer è ' + numeroComputer);
    // calcolo se la somma dei due numeri è pari o dispari
    if (pariOrNot(numeroUtente, numeroComputer)) {
      console.log('la somma è pari');
    } else {
      console.log('la somma è dispari');
    }
    // verifico chi ha vinto
    if (sceltaUtente === 'pari' && pariOrNot(numeroUtente, numeroComputer) === true) {
      console.log('Bravo, hai vinto');
    } else if (sceltaUtente === 'dispari' && pariOrNot(numeroUtente, numeroComputer) === false) {
      console.log('Bravo, hai vinto');
    } else {
      console.log('Hai perso');
    }
  }
}
