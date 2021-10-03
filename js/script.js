document.getElementById("botao-enviar").addEventListener("click",validaFormulario)

var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var telefone = document.getElementById("telefone").value;

function validaFormulario(){
  if(nome != "" && email != "" && telefone != ""){
  alert("Prontinho, você receberá as novidades por e-mail!")  
  }else{
    alert("Por favor, preencha os campos de nome, e-mail e telefone.")
  }
}