torrar() //chamando a função
injetarPao()

function torrar(){
    console.log("Torrando pão")
    injetarPao()
}
function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}

mainSaveData()

function mainSaveData(){
    getData()
    checkValues()
    sendToDatabase()
}

function getData(){
    console.log("pegando dados do usuário")
}
function checkValues(){
    console.log("validando dados do usuário")
}
function sendToDatabase(){
    console.log("cadastrando dados do usuário")
}