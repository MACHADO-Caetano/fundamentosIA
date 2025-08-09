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

peso1 = int(0)
peso2 = int(1)
peso3 = int(2)

entrada1 = int(1)
entrada2 = int(2)
entrada3 = int(3)

totalSoma = soma(entrada1, peso1, entrada2, peso2, entrada3, peso3)

print("Limite Rápido: ", limiteRapido(totalSoma))
print("Função Rampa: ", funcaoRampa(totalSoma))
print("Função Sigmoide: ", funcaoSigmoide(totalSoma))