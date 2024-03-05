//let resultado = soma(5,10)

/*console.log("O resultado dessa função é: " + soma(5,10))

function soma(numA, numB){
    return numA + numB
   // return somatorio
}*/

let userName = getFirstName("Felipe Amaral Silveira Cantos", " ")
console.log("Welcome " + userName)

userName = getFirstName("Carlos-Amaral-Silveira-Cantos", "-")
console.log("Welcome " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0] //quebrar quando encontrar o espaço no texto e jogar em um vetor, retornar posição zero.
    return firstName
}

