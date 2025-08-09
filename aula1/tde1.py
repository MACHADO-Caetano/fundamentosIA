#Exercício 1

def limiteRapido(soma):
    if soma <= 0:
        return -1 
    return 1

def funcaoRampa(soma):
    if soma < 0:
        return 0
    elif 0 <= soma and soma <= 1:
        return soma
    return 1

def funcaoSigmoide(soma):
    if soma >= 0:
        return 1 - (1 / (1 + soma))
    elif soma < 0:
        return -1 + (1 / (1 - soma))
    
def soma(entrada1, peso1, entrada2, peso2, entrada3, peso3):
    return (entrada1 * peso1) + (entrada2 * peso2) + (entrada3 * peso3)

def somaNova(entrada, peso):
    return entrada * peso

peso1 = int(0)
peso2 = int(1)
peso3 = int(2)

entrada1 = int(0)
entrada2 = int(-1)
entrada3 = int(-1)

totalSoma = soma(entrada1, peso1, entrada2, peso2, entrada3, peso3)

print("Limite Rápido: ", limiteRapido(totalSoma))
print("Função Rampa: ", funcaoRampa(totalSoma))
print("Função Sigmoide: ", funcaoSigmoide(totalSoma))

#Exercício 2

entrada = int(0)
peso = int(1)

novaSoma = somaNova(entrada, peso)

rapido = limiteRapido(novaSoma)
rampa = funcaoRampa(novaSoma)
sigmoide = funcaoSigmoide(novaSoma)

somaRapido = somaNova(rapido, -2)
somaRampa = somaNova(rampa, -2)
somaSigmoide = somaNova(sigmoide, -2)

print("Limite Rápido: ", limiteRapido(somaRapido))
print("Função Rampa: ", funcaoRampa(somaRampa))
print("Função Sigmoide: ", funcaoSigmoide(somaSigmoide))