var valor_hora = document.querySelector('#valor-hora')
var horas_proj = document.querySelector('#horas-projeto')
var resposta = document.querySelector('#resposta')

function calcular(){
    var val_final = (horas_proj.valueAsNumber * valor_hora.valueAsNumber).toFixed(2)
    resposta.textContent = "R$" + val_final

}