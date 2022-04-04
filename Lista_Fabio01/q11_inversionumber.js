import { input, print } from '../../io_utils.js'

function main() {
    // entrada
    const numero = Number(input('Digite um número = '))
        // processamento
    const centena = numero / 100
    const dezena = numero % 100 / 10
    const unidade = numero % 10
    const soma = centena + dezena + unidade
        // saida
    print(`${Math.round(unidade)}${Math.round(dezena)}${Math.round(centena)}`)

}

main()