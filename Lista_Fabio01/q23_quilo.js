import {input, print} from '../../io_utils.js'

function main(){
    const valor_kg = Number(input('Digite o valor em kg = '))

    const valor_m = valor_kg * 1000

    print(`O valor em gramas vale ${valor_m.toFixed(2)} g`)

}

main()