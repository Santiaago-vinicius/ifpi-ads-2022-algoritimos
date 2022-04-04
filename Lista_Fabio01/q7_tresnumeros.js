import { input,print } from "../../io_utils.js"

function main(){
    //entrada
    const n1 = Number(input('1° Número = '))
    const n2 = Number(input('2° Número = '))
    const n3 = Number(input('3° Número = '))
    //processamento
    const soma = n1 + n2
    const diferenca = n2 - n3
    //saida
    print(`soma = ${soma.toFixed(0)}, diferença = ${diferenca.toFixed(0)}`)
}

main()