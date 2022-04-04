import { input, print } from '../../io_utils.js'

function main() {
    const minutos = Number(input('Digite um valor em minutos: '))

    const minutos_horas = Math.floor(minutos / 60)
    const resto_minutos = minutos % 60
    const dias = Math.floor(minutos_horas / 24)

    console.log(`o valor equivale ${dias.toFixed(1)} dia(s) ${minutos_horas.toFixed(1)} horas(s) e ${resto_minutos.toFixed(1)} minuto(s)`)
}

main()