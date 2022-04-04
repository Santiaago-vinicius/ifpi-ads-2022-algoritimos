import {input, print} from '../../io_utils.js'

function main(){
    const valor_km = Number(input('Valor em quilometro: '))

    const transformar_metro = valor_km * 1000

    print(`O valor em metros é ${transformar_metro.toFixed(2)} m`)

}

main()