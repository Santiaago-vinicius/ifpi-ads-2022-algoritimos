import {input, print} from '../../io_utils.js'

function main(){
    const dias = Number(input('Digite um valor em dias: '))

    const dias_semanas = dias / 7
    const resto_dias = dias % 7

    print(`O valor é equivalente a ${Math.trunc(dias_semanas)} semana(s) e ${resto_dias} dia(s)`)

}

main()