// var userName = "Mattia"
// let birth = 1997

// const year = 2022

// let age = year - birth

// console.log(userName + " è nato nel "+ birth)

// console.log( userName + " ha " + age + " anni")

// ------------------------------------

var userName = prompt("Inserisci il tuo nome", "Mattia");

let birth = prompt("Inserisci il tuo anno di nascita", 1997);

const year = 2022

let age = year - birth

console.log( userName + " ha " + age + " anni")

alert(userName + " ha " + age + " anni" )

if (age >= 18) {
    alert(" Ciao " + userName)
} 
else {
   alert(" Ci dispiace " + userName + " ma non puoi avere accesso a questo sito :(")
}

console.log( userName + true)


