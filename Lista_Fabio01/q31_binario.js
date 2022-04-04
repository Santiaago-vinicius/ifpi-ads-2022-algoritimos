import { input, print } from '../../io_utils.js'

function main() {
    const binario = input('Digite um número binário: ')
    const decimal = parseInt(binario, 2)

    console.log(`O resultado é ${decimal.toFixed(2)}`)

}

main()