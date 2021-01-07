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
var text = document.getElementById('text');
var result = document.getElementById('result');

// chiedo all'utente di scegliere tra pari e dispari
var sceltaUtente = prompt('Scegli pari o dispari').toLowerCase();
// controllo l'input dell'utente
if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
  alert('Inserisci un valore corretto');
} else {
  text.innerHTML += 'Hai scelto ' + sceltaUtente + '<br>';
  // chiedo all'utente di scegliere un numero tra 1 e 5
  var numeroUtente = prompt('Scegli un numero da 1 a 5');
  // controllo il numero inserito
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5 || numeroUtente.length > 1) {
    alert('Inserisci un numero da 1 a 5');
    text.innerHTML = '';
  } else {
    text.innerHTML += 'Il tuo numero è ' + numeroUtente + '<br>';
    // il computer genera un numero randomico
    var numeroComputer = randomNumber(1, 5);
    text.innerHTML += 'Il numero del computer è ' + numeroComputer + '<br>';
    // calcolo se la somma dei due numeri è pari o dispari
    if (pariOrNot(numeroUtente, numeroComputer)) {
      text.innerHTML += 'la somma è pari'  + '<br>';
    } else {
      text.innerHTML += 'la somma è dispari'  + '<br>';
    }
    // verifico chi ha vinto
    if (sceltaUtente === 'pari' && pariOrNot(numeroUtente, numeroComputer) === true) {
      result.innerHTML = 'Bravo, hai vinto';
    } else if (sceltaUtente === 'dispari' && pariOrNot(numeroUtente, numeroComputer) === false) {
      result.innerHTML = 'Bravo, hai vinto';
    } else {
      result.innerHTML = 'Hai perso';
    }
  }
}
