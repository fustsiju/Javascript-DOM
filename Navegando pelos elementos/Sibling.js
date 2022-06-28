//Navegando pelos elementos
//nextSibling/nextElementSibling e previousSibling/previousElementSibling
const element = document.querySelector('header')
console.log(element.nextSibling)    //Printa no console o proximo elemento irmão, leva em consideração espaços vazios
console.log(element.nextElementSibling)    //Printa no console o proximo elemento irmão, não leva em consideração espaços vazios
console.log(element.previousSibling)  //Printa no console o elemento irmão anterior, leva em consideração espaços vazios
console.log(element.previousElementSibling)  //Printa no console o elemento irmão anterior, não leva em consideração espaços vazios