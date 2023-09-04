

function calculadora (num) {
    
    var numero = document.querySelector("#visor").textContent 

    document.querySelector("#visor").textContent = numero + num  
}

function clean () {
    document.querySelector("#visor").textContent = ''
}

function back () {
    var resultado = document.querySelector("#visor").textContent;
    document.querySelector("#visor").textContent = resultado.substring(0, resultado.length - 1)
}

function calcular () {
    var resultado = document.querySelector("#visor").textContent;
    if (resultado) {
        document.querySelector("#visor").textContent = eval(resultado)
    }
}