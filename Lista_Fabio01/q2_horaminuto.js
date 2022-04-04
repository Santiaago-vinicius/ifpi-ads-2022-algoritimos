import {input, print} from '../../io_utils.js'

function main(){
    //entrada
    const hora = Number(input('Valor em horas = '))
    const minutos = Number(input('Valor em minutos = '))
    //processamento
    const resto_minutos = minutos * 60
    const total = resto_minutos + hora
    //saida
    print(`O valor é ${Math.trunc(total)} minutos`)


}

main()