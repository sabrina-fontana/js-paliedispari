// DEFINISCO LA FUNZIONE con argomento 'parola'
function parolaPalindroma (parola) {
  // trasformo la parola in un array
  var lettereParola = parola.split('');
  // metto le lettere dell'array al contrario
  var lettereContrario = lettereParola.reverse();
  // trasformo l'array in una stringa
  var parolaContrario = lettereContrario.join('');
  // se la parola è uguale al suo contrario -> console log
  if (parola === parolaContrario) {
    console.log('La parola ' + parola + ' è palindroma');
  } 
}

// chiedo all'utente una parola
var parolaUtente = prompt('Inserisci una parola');

// invoco la funzione
parolaPalindroma (parolaUtente);
