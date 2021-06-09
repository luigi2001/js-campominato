
/* generazione numeri random */

var livelli = parseInt(prompt('inserisci un livello di difficoltà da 0 a 2:'));

var numeriRandom;

var numeri = [];

while(numeri.length < 16){

    switch(livelli){
        case 0:
            numeriRandom = randomNumber(1,100);
            if(!numeri.includes(numeriRandom)){
                numeri.push(numeriRandom);
            }
            break;
        case 1:
            numeriRandom = randomNumber(1,80);
            if(!numeri.includes(numeriRandom)){
                numeri.push(numeriRandom);
            }
            break;
        case 2:
            numeriRandom = randomNumber(1,50);
            if(!numeri.includes(numeriRandom)){
                numeri.push(numeriRandom);
            }
            break;
        default:
            alert('Non hai scelto un livello. Riprova');
            var livelli = parseInt(prompt('inserisci un livello di difficoltà da 0 a 2:'));
    }
    
}

/* input utente */
/* controllo se numero inserito da utente è presente nella lista random */

var numeriUtente = [];

while(numeriUtente.length < 84){

    var inputNumero = parseInt(prompt('Inserire un numero:'));

    if(!numeriUtente.includes(inputNumero) && inputNumero >= 1 && inputNumero <= 100 && livelli == 0){
        if(!numeri.includes(inputNumero)){
            numeriUtente.push(inputNumero);
        }else{
            /* hai beccato la bomba */
            alert('Hai beccato la bomba. Mi spiace. Grazie per aver giocato.');
            break;
        }
    }else if(!numeriUtente.includes(inputNumero) && inputNumero >= 1 && inputNumero <= 80 && livelli == 1){
        if(!numeri.includes(inputNumero)){
            numeriUtente.push(inputNumero);
        }else{
            /* hai beccato la bomba */
            alert('Hai beccato la bomba. Mi spiace. Grazie per aver giocato.');
            break;
        }
    }else if(!numeriUtente.includes(inputNumero) && inputNumero >= 1 && inputNumero <= 50 && livelli == 2){
        if(!numeri.includes(inputNumero)){
            numeriUtente.push(inputNumero);
        }else{
            /* hai beccato la bomba */
            alert('Hai beccato la bomba. Mi spiace. Grazie per aver giocato.');
            break;
        }
    }else{
        alert('Attenzione! Hai inserito due volte lo stesso numero oppure non hai rispettato il range previsto dal livello scelto. Riprova');
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

