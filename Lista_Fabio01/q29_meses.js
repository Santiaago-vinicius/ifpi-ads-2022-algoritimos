import {input, print} from '../../io_utils.js'

function main(){
    const meses = Number(input('Valor dos meses : '))

    const meses_ano = meses / 12
    const resto_meses = meses % 12

    print(`O valor equivale ${Math.trunc(meses_ano)} ano(S) e ${Math.trunc(resto_meses)} meses(s)`)

}

main()