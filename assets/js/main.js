/*Tools:
    -const/let
    -queryselector
    -math random
    -settimeout
    -prompt
    -if/else
*/


// Visualizzare in pagina 5 numeri casuali. 
const numbersElement = document.querySelector(".numbers");
const numbsList = randomNumbGenerator(5);
numbersElement.innerHTML = (numbsList);

// parte un timer di 30 secondi. 
const timerElement = document.querySelector(".timer");
let seconds = 30;
const chronometer = setInterval(function(){
    if (seconds >= 0) {
        timerElement.innerHTML = `Hai ancora ${seconds} secondi`;
        seconds--;
    } else {
        //Dopo 30 secondi i numeri scompaiono
        numbersElement.innerHTML = "";
        timerElement.innerHTML = "Il tempo è scaduto! Quanti numeri riesci a ricordare?"
        clearInterval(chronometer);
    }
}, 1000);

/* l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().*/

setTimeout(function(){
    const userList = [];
    const guessEl = document.querySelector(".guess");
    for (let i = 1; i <= numbsList.length; i++) {
        const guessNumbs = Number(prompt(`Indovina il numero ${[i]}`));
        userList.push(guessNumbs);
    }
    /*
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
    */
    const rightNumbs = confrontaArrays(numbsList, userList);
    console.log(rightNumbs);
    guessEl.innerHTML = `Hai indovinato ${rightNumbs.length} numeri`;
    if(!rightNumbs.length == 0){
        guessEl.innerHTML += ` e sono ${rightNumbs} `;
    }

}, 33000);


/* 
 */




//Funzioni
/**
 * funzione genera un'array di n numeri casuali non ripetuti
 * @param {number} n array lenght
 */
function randomNumbGenerator (n) {
    const numbsArray = [];
    while (numbsArray.length < n) {
        const randomNum = Math.ceil(Math.random()*100);
        if (!numbsArray.includes(randomNum)) {
            numbsArray.push(randomNum);
        } 
    }   
    return numbsArray;
}


function confrontaArrays (array1, array2){
    const array3 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]) {
                array3.push(array1[i]);
            }
        }
    }
    return array3;
}
