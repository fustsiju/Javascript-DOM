//Navegando pelos elementos
//childNodes e children
const element = document.querySelector('body')     // Pegando o body html

console.log(element.childNodes)       //Printando quem são os filhos em formato de node list
console.log(element.children)       //Elimina os espaços vazios do HTML e vem em formato de HTML Collection
//firstChild e firstElementChild
console.log(element.firstChild)     //Leva em consideração os espaços vazios
console.log(element.firstElementChild)      //Não leva em consideração os espaços vazios, pegara o primeiro elemento filho

console.log(element.lastChild)         //Printando o ultimo elemento filho
console.log(element.firstElementChild)      //Printando o ultimo elemento filho