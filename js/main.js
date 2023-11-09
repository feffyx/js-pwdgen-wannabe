
// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let numberRequest1 = prompt("Inserisci un numero");
let numberRequest2 = prompt("Inserisci un numero diverso");

// Converto le variabli numbers (che era un testo per via del prompt) in un NUMERO
numberRequest1= parseInt(numberRequest1);
numberRequest2= parseInt(numberRequest2);

// Elaborazione delle statistiche
let divOfNumberRequest = numberRequest1 / numberRequest2
let password = name + surname + favoriteColor

let password1 = password + 21
let password2 = password + Math.round(divOfNumberRequest)
let password3 = password + Math.floor(Math.random() * 101)

// Compliazione delle info
let informazioni = `
-------------- informazioni utente --------------
> Informazioni personali:
nome: ${name} 
cognome: ${surname}
colore preferito: ${favoriteColor}
numero1: ${numberRequest1}
numero2: ${numberRequest2}



>Informazioni elaborate:
risultato della divisione ${divOfNumberRequest}

>crea password:
password debole ${password1}
password sicura ${password2}
password forte ${password3}
-------------------------------------------------------------
`;

console.log(informazioni);

// HTML
document.getElementById("password1").innerHTML = password + 21;
document.getElementById("password2").innerHTML = password + Math.round(divOfNumberRequest);
document.getElementById("password3").innerHTML = password + Math.floor(Math.random() * 101);
