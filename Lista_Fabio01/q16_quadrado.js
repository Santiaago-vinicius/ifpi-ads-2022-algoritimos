import {input, print} from '../../io_utils.js'

function main(){
    const lado_do_quadrado = Number(input('Digite o lado do quadrado: '))
    
    const area = lado_do_quadrado **2

    print(`A área do quadrado vale ${area.toFixed(2)} m`)

}

main()