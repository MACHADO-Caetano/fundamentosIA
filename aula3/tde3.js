const INFORMATICA = 0

const BIOLOGIA = 1

const enumLabels = {
    [INFORMATICA]: "Informática",
    [BIOLOGIA]: "Biologia"
}

let treinamento = [
    {
        vies: 1,
        entrada1: 0,
        entrada2: 0,
        resultadoEsperado: INFORMATICA
    },
    {
        vies: 1,
        entrada1: 1,
        entrada2: 0,
        resultadoEsperado: INFORMATICA
    },
    {
        vies: 1,
        entrada1: 0,
        entrada2: 1,
        resultadoEsperado: BIOLOGIA
    },
    {
        vies: 1,
        entrada1: 1,
        entrada2: 1,
        resultadoEsperado: BIOLOGIA
    }
]

let pesoVies = 0, peso1 = 0, peso2 = 0

let somatorio, saida, ajustes, ajustesTotais = 0

function soma(vies, entrada1, entrada2){
    return (vies * pesoVies) + (entrada1 * peso1) + (entrada2 * peso2)
}

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
    pesoVies = pesoVies + 1 * (resultadoDesejado - resultadoObtido) * vies
}

function mostraDados(){
    console.log("Pesos finais: Peso1: " + peso1 + " Peso2: " + peso2 + " Peso Vies: " + pesoVies)

    console.log("Ajustes: " + ajustesTotais)
}

function lerEntrada(mensagem) {
    process.stdout.write(mensagem);
    let buffer = "";
    const stdin = process.stdin;
    stdin.resume();
    stdin.setEncoding('utf8');
    
    return new Promise((resolve) => {
        stdin.on('data', function(data) {
            buffer += data;
            stdin.pause();
            resolve(buffer.trim());
        });
    });
}

do{
    ajustes = 0

    treinamento.forEach(valor => {
        somatorio = soma(valor.vies, valor.entrada1, valor.entrada2)
        saida = transferencia(somatorio)
        if(saida != valor.resultadoEsperado){
            ajuste(valor.vies, valor.entrada1, valor.entrada2, valor.resultadoEsperado, saida)
            ajustes++
            ajustesTotais++
        }
    });

} while(ajustes != 0)



//Execução

// let entrada = lerEntrada();

// console.log(entrada)