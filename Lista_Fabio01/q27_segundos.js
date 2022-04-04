import {input, print} from '../../io_utils.js'

function main(){
    const valor_segundos = Number(input('Valor em segundos: '))

    const segundo_hora = valor_segundos / 3600
    const resto_minutos = valor_segundos % 3600
    const resto_segundos = resto_minutos / 60

    print(`O valor equivale ${Math.trunc(segundo_hora)} h(s) ${Math.trunc(resto_minutos)} min(s) e ${Math.trunc(resto_segundos)} seg(s)`)
    

}

main()