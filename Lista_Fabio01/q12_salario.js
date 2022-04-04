import { input, print } from "../../io_utils.js"
function main(){
    //entrada
    const salario = Number(input('Olá trabalhador, digite seu salário : '))
    //processamento
    const porctg = 0.7 * salario
    const novo_salario = salario + porctg
    //saida
    print(`Seu novo salário será de R$ ${novo_salario.toFixed(2)}`)
    

}

main()