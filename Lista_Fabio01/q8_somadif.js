import {input, print} from "../../io_utils.js"
function main(){
    //entrada
    const x = Number(input('Digite um número : '))
    const y = Number(input('Digite outro : '))
    //processamento
    const soma = x + y
    const sub = x - y
    const total = soma / sub
    //saida
    print(`Resultado = ${total.toFixed(2)}`)


}

main()