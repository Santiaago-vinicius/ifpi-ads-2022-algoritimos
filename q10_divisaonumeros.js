import {input, print} from "../../io_utils.js"

function main(){
    //entrada
    const x = Number(input('número 1: '))
    const y = Number(input('Número 2: '))
    //processamento
    const quociente = x / y
    const resto = x % y
    //saida
    print(`O quociente vale ${quociente.toFixed(2)} e o resto vale ${Math.trunc(resto)}`)


}

main()