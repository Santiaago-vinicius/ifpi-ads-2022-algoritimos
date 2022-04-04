import { input, print } from '../../io_utils.js'

function main() {
    const numero1 = Number(input('Digite um número: '))
    const numero2 = Number(input('Digite outro: '))
    const numero3 = Number(input('Digite mais um: '))

    const media = (numero1 + numero2 + numero3) / 3

    console.log(`A média vale ${media.toFixed(2)}`)


}

main()