/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1- creo la funzione per verificare la parola
2- chiedo all'utente un nome
3- faccio un ciclo for per girare la parola
4- memorizzo la parola in una variabile
5- controllo se la parola dell'utente è uguale a quella girata 
6- restituisco true o false

*/

// Chiedo una parola al utente
const inputUser = prompt('Inserisci una parola')

const result = isInputPalindrome(inputUser)

console.log(result)

// Dichiaro Funzione
function isInputPalindrome(word){
    let revWord = '';
    for(let i = word.lengt - 1; i >= 0; i--){
        revWord += word.charAt(i);
    }

    if (word === revWord){
        return true; 
    } else{
        return false;
    }

}