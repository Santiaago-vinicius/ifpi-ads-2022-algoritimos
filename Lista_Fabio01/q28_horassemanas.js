import {input, print} from '../../io_utils.js'

function main(){
    const valor_horas = Number(input('Valor em horas: '))
    
    const horas_semanas = Math.floor(valor_horas / 168)
    const resto_dias = Math.floor((valor_horas % 168) / 24)
    const resto_horas = valor_horas - horas_semanas * 168 - resto_dias * 24

    print(`o valor equivale ${Math.trunc(horas_semanas)} semana(s) ${Math.trunc(resto_dias)} dia(s) ${Math.trunc(resto_horas)} hora(s)`)

}

main()