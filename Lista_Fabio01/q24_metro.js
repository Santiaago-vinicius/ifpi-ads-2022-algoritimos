import {input, print} from '../../io_utils.js'

function main(){
    const metro = Number(input('Valor em metro: '))

    const centimetro = metro * 100

    print(`O valor em cm é de ${centimetro.toFixed(2)} cm`)

}

main()