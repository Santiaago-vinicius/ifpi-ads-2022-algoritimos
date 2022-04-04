import {input, print} from '../../io_utils.js'

function main(){
    const temp_fahreinheit = Number(input('Digite a temperatura em fahrenheit: '))

    const temp_celsiu = ((5 * temp_fahreinheit) - 160) / 9
    
    print(`Temperatura em C° = ${temp_celsiu.toFixed(2)} c°`)
}

main()