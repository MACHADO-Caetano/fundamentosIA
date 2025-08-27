const AUTOMOBILISMO = 1

const FUTEBOL = 0

let treinamento = [
    {
        entrada1: 0,
        entrada2: 0,
        resultadoEsperado: FUTEBOL
    },
    {
        entrada1: 0,
        entrada2: 1,
        resultadoEsperado: FUTEBOL
    },
    {
        entrada1: 1,
        entrada2: 0,
        resultadoEsperado: AUTOMOBILISMO
    },
    {
        entrada1: 1,
        entrada2: 1,
        resultadoEsperado: AUTOMOBILISMO
    }
]

let peso1 = -1, peso2 = -1

let somatorio, saida, ajustes, ajustesTotais = 0

function soma(entrada1, entrada2){
    return (entrada1 * peso1) + (entrada2 * peso2)
}

//Função de Transferência de Rampa
function transferencia(resultadoSoma){
    if (resultadoSoma < 0){
        return 0
    }else if (resultadoSoma >= 0 && resultadoSoma <= 1){
        return resultadoSoma
    }
    return 1
}

function ajuste(entrada1, entrada2, resultadoDesejado, resultadoObtido){
    peso1 = peso1 + 1 * (resultadoDesejado - resultadoObtido) * entrada1
    peso2 = peso2 + 1 * (resultadoDesejado - resultadoObtido) * entrada2
}

do{
    ajustes = 0

    treinamento.forEach(valor => {
        somatorio = soma(valor.entrada1, valor.entrada2)
        saida = transferencia(somatorio)
        if(saida != valor.resultadoEsperado){
            ajuste(valor.entrada1, valor.entrada2, valor.resultadoEsperado, saida)
            ajustes++
            ajustesTotais++
        }
    });

} while(ajustes != 0)

console.log("Pesos finais: Peso1: " + peso1 + " Peso2: " + peso2)

console.log("Ajustes: " + ajustesTotais)

console.log(treinamento)