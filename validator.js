
 
var name = document.getElementById("name");
var email = document.getElementById("email");



function subscribe() {
    if (name.value == ""){
        alert("Usuário não informado.");
        name.focus();
        name.style.backgroundColor = "#FF0000";
    }
    if (email.value==""){
        alert("Senha não informada.");
        email.focus();
    }
        
    alert("Inscrição realizada com sucesso!").arguments(Animation);
}
