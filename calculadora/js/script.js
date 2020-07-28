var ganho_mes = document.querySelector("#ganho-mes")
var horas_dia = document.querySelector("#horas-dia")
var resultado = document.querySelector("#resposta")

console.log(valor_hora, horas_proj)

function calcularValorHora(){
    var hora_total = horas_dia.valueAsNumber * 22
    var total_mes = (ganho_mes.valueAsNumber / hora_total).toFixed(2)
    resultado.textContent = "R$" + total_mes
    
}