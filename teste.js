document.body.onload = adcElemento;

function adcElemento () {

let navbar = document.getElementById("nav");



//botao troca a cor para azul
let btnAzul = document.createElement("button");
btnAzul.className = "btn btn-primary";
btnAzul.innerHTML = "azul";
btnAzul.setAttribute("id", "btn");
btnAzul.addEventListener("click", azul);

//botao limpa as alteracoes
let btnClear = document.createElement("button");
btnClear.className = "btn btn-primary";
btnClear.innerHTML = "clear";
btnClear.setAttribute("id", "btn");
btnClear.addEventListener("click", clear)

//Botao deixa em negrito a letras

let btnNgt = document.createElement("button");
btnNgt.className = "btn btn-primary";
btnNgt.innerHTML = "Negrito";
btnNgt.setAttribute("id", "btn");
btnNgt.addEventListener("click", negrito);

//botao italico

let btnItc = document.createElement("button");
btnItc.className = "btn btn-primary";
btnItc.innerHTML = "Intalico";
btnItc.setAttribute("id", "btn");
btnItc.addEventListener("click", italico);  

//Subrinha o texto

let btnSub = document.createElement("button");
btnSub.className = "btn btn-primary";
btnSub.innerHTML = "Subrinhar";
btnSub.setAttribute("id", "btn");
btnSub.addEventListener("click", Subrinha);  


//tacha o texto

let btnTac = document.createElement("button");
btnTac.className = "btn btn-primary";
btnTac.innerHTML = "Tachar";
btnTac.setAttribute("id", "btn");
btnTac.addEventListener("click", tachar);

//Alinha o texto para o centro

let btnAlct = document.createElement("button");
btnAlct.className = "btn btn-primary";
btnAlct.innerHTML = "Centro";
btnAlct.setAttribute("id", "btn");
btnAlct.addEventListener("click", AlgCentro);


//Alinha o texto para a esquerda

let btnEsq = document.createElement("button");
btnEsq.className = "btn btn-primary";
btnEsq.innerHTML = "Esquerda";
btnEsq.setAttribute("id", "btn");
btnEsq.addEventListener("click", AlgEsquerda);


//Alinha o texto para a direita

let btnDir = document.createElement("button");
btnDir.className = "btn btn-primary";
btnDir.innerHTML = "Direita";
btnDir.setAttribute("id", "btn");
btnDir.addEventListener("click", AlgDireita);


//pega o texto escrito no textArea
let teste = document.getElementById("text");
teste.innerHTML = "testetea";


navbar.appendChild(btnClear);
navbar.appendChild(btnAzul);
navbar.appendChild(btnNgt);
navbar.appendChild(btnItc);
navbar.appendChild(btnSub);
navbar.appendChild(btnTac);
navbar.appendChild(btnAlct);
navbar.appendChild(btnEsq);
navbar.appendChild(btnDir);








function clear(){

    teste.style.color = "black"; 
    teste.style.fontWeight = "1";
    teste.style.fontStyle = "normal";
    teste.style.textDecoration = "none";

};


function azul (){

    teste.style.color = "blue";
    
};


function negrito(){
    
    teste.style.fontWeight = "900";
    
};

function italico(){

    teste.style.fontStyle = "italic";

}

function Subrinha(){

    teste.style.textDecoration = "underline";
    
}

function tachar(){

    teste.style.textDecoration = "line-through";
    
}

function AlgCentro(){

    teste.style.textAlign = "center";
    
}

function AlgEsquerda(){

    teste.style.textAlign = "left";
    
}

function AlgDireita(){

    teste.style.textAlign = "right";
    
}


}


