import { input, print } from "../../io_utils.js"

function main(){
    //entrada
    const real = Number(input('Digite o valor = '))
    //processmento
    const porcento = 0.7 * real
    //saida
    print(`70% desse valor é R$ ${porcento.toFixed(2)}`)

}

main()