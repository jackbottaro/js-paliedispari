/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const resultElement = document.getElementById('result');


// 1 Chiediamo input al utente

const userChoice = prompt('Scrivi pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// 2 Creo funzione per generare numero random

function randomNumber(min, max){
    const random = parseInt(Math.floor(Math.random() * (max - min + 1)  + min));
    return random
};

const cpuNumber = randomNumber(1, 5)

// 3 Sommiamo i due numeri

const sum = userNumber + cpuNumber;

// 4 Stabiliamo se la somma è pari o dispari

function isEven(number){
    return number % 2 === 0 ? true : false;
}

// 5 Verifico il vincitore
let message;

if (isEven(sum) && userChoice === 'pari' || !isEven(sum) && userChoice === 'dispari'){
    message = `L'umano ha scelto <strong>${userChoice}</strong>, il numero scelto è <strong>${userNumber}</strong> mentre il numero scelto da computer è <strong>${cpuNumber}</strong>
    La somma dei due numeri è: <strong>${sum}</strong>.
    In questo caso hai avuto la meglio sul computer`
} else{
    message = `L'umano ha scelto <strong>${userChoice}</strong>, il numero scelto è <strong>${userNumber}</strong> mentre il numero scelto da computer è <strong>${cpuNumber}</strong>
    La somma dei due numeri è: <strong>${sum}</strong>.
    Purtroppo il computer ha avuto la meglio e ti ha battuto`
}

resultElement.innerHTML = message