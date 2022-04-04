import {input, print} from '../../io_utils.js'

function main(){
    const base = Number(input('Base: '))
    const altura = Number(input('Altura: '))

    const area = base * altura

    print(`O valor da base vale ${area.toFixed(2)} m`)


}

main()