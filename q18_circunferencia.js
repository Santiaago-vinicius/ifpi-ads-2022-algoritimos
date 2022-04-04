import {input, print} from '../../io_utils.js'

function main(){
    const raio = Number(input('Digite o raio: '))
    const pi = 3.14

    const comprimento = 2 * pi * raio

    print(`O valor do comprimento vale ${comprimento.toFixed(2)} m`)




}
main()