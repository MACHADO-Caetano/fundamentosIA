let e1c1 = 0, e2c1 = 0, re1 = 0;
let e1c2 = 1, e2c2 = 1, re2 = 1;

let pesos = [-1, -1];

let c = 1;

let ajustes = 0, repeticoes = 0, quantidadeAjustesNecessarios = 0;

function transferencia(soma) {
    if (soma <= 0) {
        return 0;
    }
    return 1;
}

function soma (valores) {
    resultado = 0;

    valores.forEach(valor => {
        resultado += valor.entrada * valor.peso
    });

    return resultado
}

function ajuste(valores)
{
    i = 0;
    valores.forEach(valor => {
        valores[i].peso = valor.peso + c * (valor.resultadoDesejado - valor.resultadoObtido) * valor.entrada;
        i++;
    })

    return valores;
}

do {
    ajustes = 0;

    //Caso 1
    valores = [
        {entrada: e1c1, peso: pesos[0]},
        {entrada: e2c1, peso: pesos[1]},
    ];

    resultadoSoma = soma(valores);
    resultadoObtido = transferencia(resultadoSoma);

    if (resultadoObtido != re1) {
        valoresAjuste = [
            {
                entrada: e1c1,
                peso: pesos[0],
                resultadoDesejado: re1,
                resultadoObtido: resultadoObtido
            },
            {
                entrada: e2c1,
                peso: pesos[1],
                resultadoDesejado: re2,
                resultadoObtido: resultadoObtido
            },
        ]

        resultado = ajuste(valoresAjuste);

        i=0;
        resultado.forEach(item => {
            pesos[i] = item.peso;
            i++;
        })

        ajustes++;
        quantidadeAjustesNecessarios++;
    }

    repeticoes++;
} while (ajustes != 0);


console.log("Os pesos apos o treinamento da rede é: " + pesos[0] + " e " + pesos[1]);
console.log("Quantidade de ajustes necessarios: " + quantidadeAjustesNecessarios);