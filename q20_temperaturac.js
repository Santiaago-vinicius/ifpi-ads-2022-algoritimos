import {input, print} from '../../io_utils.js'

function main(){
    const temp_celsius = Number(input('Digite a temperatura em C°: '))
    
    const temp_fahrenheit = (9 * temp_celsius + 160) / 5

    print(`Temperatura em F° = ${temp_fahrenheit.toFixed(2)} f°`)

}

main()