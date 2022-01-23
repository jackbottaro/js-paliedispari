/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Chiedo input al utente
let userValues = prompt('Scegli pari o dispari').trim();
console.log(userValues);

let userNumber = prompt('Scegli un numero da 1 a 5')
console.log(userNumber);

// Generiamo numero rando
const cpuNumber = cpuRandom(1, 5);
console.log(cpuNumber);

// Funzione per numero random
function cpuRandom(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

// Sommo i due numeri
const sum = userNumber + cpuNumber;

// Stabiliamo se la somma è pari o dispari
function pari(number){
    return number % 2 === 0 ? true : false;
}

// Stabiliamo vincitore
if (pari(sum) && userValues === 'pari' || !pari(sum) && userValues === 'dispari' ){
    console.log('Hai vinto');
} else {
    console.log('Hai perso')
}