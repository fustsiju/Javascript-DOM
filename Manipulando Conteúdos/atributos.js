//Manipulando elementos
//atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')         //adicionando atributo

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))     //pegando atributo

header.removeAttribute('id')        //removendo atributo
header.removeAttribute('class')     //removento atributo
