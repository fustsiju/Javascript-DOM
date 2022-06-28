//Adicionando Elementos
//append e prepend
const div = document.createElement('div')       //Criando elemento com o nome div
div.innerText = "Olá Devs!"             //Colocando um innerText dentro de div

const body = document.querySelector('body')     //Pegando o body 

body.append(div)            //Adicionando a div dentro de body após o ultimo elemento filho
body.prepend(div)            //Adicionando a div dentro de body como primeiro elemento filho
