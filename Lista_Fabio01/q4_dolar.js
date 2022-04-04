import { input, print } from "../../io_utils.js"

function main(){
    //entrada
    const valor_dolar = 4.77
    const valor_em_dolar = Number(input('Digite o valor em dolar = '))
    //processamento
    const Valor_reais = valor_em_dolar / valor_dolar
    //saida
    print(`Valor em R$ ${Valor_reais.toFixed(2)}`)


}

main()