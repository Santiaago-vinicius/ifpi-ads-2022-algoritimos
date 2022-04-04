import {input, print} from '../../io_utils.js'

function main(){
    const base = Number(input('Digite a base: '))
    const altura = Number(input('Digite a altura: '))

    const area = (base * altura) / 2

    print(`O valor da área é ${area.toFixed(2)} m`)

}

main()