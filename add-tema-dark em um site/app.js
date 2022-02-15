 'use strict'  // O JavaScript tenta ser amigável e ele tenta fazer com que o código funcione e forneça uma solução, mesmo que o resultado venha a ser um erro. Você pode ativar o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
     document.body.classList.toggle('dark-theme') //o método toggle para alternar o elemento para a classe dark-theme. Isso aplica, automaticamente, os estilos de tema escuro em vez do tema claro

     var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } 
    else {
        this.textContent = "light";
    }
    console.log("current class name: " + className);
});