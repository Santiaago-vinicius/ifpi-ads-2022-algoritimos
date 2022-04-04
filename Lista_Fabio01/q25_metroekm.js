import {input, print} from '../../io_utils.js'

function main(){
    const metro = Number(input('Valor em metros: '))

    const metro_km = metro / 1000
    const resto_metros = metro % 1000

    print(`Este valor é equivalente a ${metro_km} km(s) e ${resto_metros} m(s)`)

}

main()