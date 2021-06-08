
/* generazione numeri random */

var numeri = [];


while(numeri.length < 16){

    var numeriRandom = randomNumber(1,100);
    

    if(!numeri.includes(numeriRandom)){
        numeri.push(numeriRandom);
    }

}

/* input utente */
/* controllo se numero inserito da utente è presente nella lista random */

var numeriUtente = [];


while(numeriUtente.length < 84){

    var inputNumero = parseInt(prompt('Inserire un numero:'));

    if(!numeriUtente.includes(inputNumero) && inputNumero >= 1 && inputNumero <= 100){
        if(!numeri.includes(inputNumero)){
            numeriUtente.push(inputNumero);
        }else{
            /* hai beccato la bomba */
            alert('Hai beccato la bomba. Mi spiace. Grazie per aver giocato.');
            break;
        }
    }else{
        alert('Attenzione! Hai inserito due volte lo stesso numero oppure non hai rispettato il range previsto da 1 a 100. Riprova');

    }

}

if(numeriUtente.length == 84){
    alert('Complimenti! Hai ottenuto il massimo del punteggio.');
} else{
    alert('hai otteuto un punteggio di:' +  ' ' + numeriUtente.length);
}




/* funzioni */

function randomNumber(min,max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

