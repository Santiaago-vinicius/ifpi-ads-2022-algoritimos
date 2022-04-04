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
    print(`Este numero possui ${Math.round(centena)} centenas ${Math.round(dezena)} dezenas e ${Math.round(unidade)} unidades e a soma dos 3 vale ${Math.trunc(soma)}`)

}

main()