import {input, print} from '../../io_utils.js'

function main(){
    const raio = Number(input('Digite o valor do raio: '))
    const pi = 3.14

    const volume = (4 * pi * raio ** 3) / 3

    print(`O valor do volume vale ${volume.toFixed(2)} m`)

}

main()