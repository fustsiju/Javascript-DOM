//Adicionando Elementos
//insertBefore
const div = document.createElement('div')       //Criando elemento com o nome div
div.innerText = "Olá Devs!"             //Colocando um innerText dentro de div


const body = document.querySelector('body')     //Pegando o body 
const script = body.querySelector('script')     //Pegando o script
body.insertBefore(div, script)          //Inserindo a div antes de script