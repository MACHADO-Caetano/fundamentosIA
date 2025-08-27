const BIOLOGIA = 1

const INFORMATICA = 0

let treinamento = [
    {
        vies: 1,
        entrada1: 0,
        entrada2: 0,
        resultadoEsperado: INFORMATICA
    },
    {
        vies: 1,
        entrada1: 0,
        entrada2: 1,
        resultadoEsperado: INFORMATICA
    },
    {
        vies: 1,
        entrada1: 1,
        entrada2: 0,
        resultadoEsperado: BIOLOGIA
    },
    {
        vies: 1,
        entrada1: 1,
        entrada2: 1,
        resultadoEsperado: BIOLOGIA
    }
]

let peso1 = 0, peso2 = 0, peso0 = 0

let somatorio, saida, ajustes, ajustesTotais = 0

function soma(vies, entrada1, entrada2){
    return (vies * peso0) + (entrada1 * peso1) + (entrada2 * peso2)
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

function ajuste(entrada1, entrada2, vies,  resultadoDesejado, resultadoObtido){
    peso1 = peso1 + 1 * (resultadoDesejado - resultadoObtido) * entrada1
    peso2 = peso2 + 1 * (resultadoDesejado - resultadoObtido) * entrada2
    peso0 = peso0 + 1 * (resultadoDesejado - resultadoObtido) * vies
}

do{
    ajustes = 0

    treinamento.forEach(valor => {
        somatorio = soma(valor.entrada1, valor.entrada2)
        saida = transferencia(somatorio)
        if(saida != valor.resultadoEsperado){
            ajuste(valor.vies, valor.entrada1, valor.entrada2, valor.resultadoEsperado, saida)
            ajustes++
            ajustesTotais++
        }
    });

} while(ajustes != 0)

console.log("Pesos finais: Peso1: " + peso1 + " Peso2: " + peso2 + " Peso Vies: " + peso0)

console.log("Ajustes: " + ajustesTotais)

console.log(treinamento)