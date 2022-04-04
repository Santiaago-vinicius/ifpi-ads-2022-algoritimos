import {input, print} from "../../io_utils.js"

function main(){
    //entrada
    const valor_minutos = Number(input('Valor em minutos = '))
    //processamento
    const minuto_hora = valor_minutos / 60
    const resto_minutos = valor_minutos % 60
    //saida
    print(`Temos então ${Math.trunc(minuto_hora)} horas e ${Math.trunc(resto_minutos)} minutos`)


}

main()