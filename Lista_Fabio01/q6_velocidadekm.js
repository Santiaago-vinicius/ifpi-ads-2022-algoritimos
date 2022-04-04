import {input, print} from '../../io_utils.js'

function main(){
    //entrada
    const velocidade_km = Number(input('Velocidade em km/h = '))
    //processamento
    const velocidade_ms = velocidade_km / 3.6
    //saida
    print(`O valor é ${velocidade_ms.toFixed(2)} m/s`) 


}

main()