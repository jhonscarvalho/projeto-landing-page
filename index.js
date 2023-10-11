var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    setaDireita.style = "display:none;"
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    setaDireita.style = "display:flex"
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none;"
}