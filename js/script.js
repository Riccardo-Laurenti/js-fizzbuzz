//   Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
//  - per i multipli di 3 stampi “Fizz” al posto del numero
//  - per i multipli di 5 stampi “Buzz” al posto del numero.
//  - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.





// Recupero gli elementi in pagina

const cicleElement = document.getElementById('cicle');


let result ='';

// Creo un ciclo che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // Cambio risultato per i multipli di 3 o di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result += '<li>FizzBuzz</li>';
    } else if (i % 3 === 0) {
        result += '<li>Fizz</li>';
    } else if (i % 5 === 0) {
        result += '<li>Buzz</li>';
    } else {
        result += `<li>${i}</li>`;
    }
}

console.log(`risultato fine ciclo`, result);

// Stampo in pagina

cicleElement.innerHTML = result;