/*
Case Sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClasseName()
por Seletor: querySelector()

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "50%"
email.style.width = "50%"

function validaNome(){
    let textNome = document.querySelector("#txtNome")
    if (nome.value.length <3 ){
        textNome.innerHTML = "Nome Inválido"
        textNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}
 
function validaEmail() {
    let txtEmail = Document("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.colo = "green"
        emailOk = true
    }
}

function validaAssunto() {
    textAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100){
        textAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        textAssunto.style.color = "red"
        textAssunto.style.display = "block"
    }
    else {
        textAssunto.style.display = "none"
        assuntoOk = true 
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }
 
 function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }
 
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }