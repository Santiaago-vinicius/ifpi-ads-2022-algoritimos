// 3 notas 3 pesos media ponderada
import {input, print} from '../../io_utils.js'
function main(){
    //entrada
    const n1 = Number(input('n1 = '))
    const n2 = Number(input('n2 = '))
    const n3 = Number(input('n3 = '))
    //pesos
    const p1 = Number(input('p1 = '))
    const p2 = Number(input('p2= '))
    const p3 = Number(input('p3 = '))
    //processamento
    const numerador = (n1*p1) + (n2*p2) + (n3*p3)
    const denomidador = p1 + p2 + p3
    const media = numerador / denomidador
    //saida
    print(`Média = ${media.toFixed(2)}`)

}
main()