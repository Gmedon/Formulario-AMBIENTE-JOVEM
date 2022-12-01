let inputs = document.querySelectorAll(".input-info");
let inputgrupo = document.querySelector(".input-login-grupo");
let inputsenha = document.querySelector(".input-login-senha");
function enviarform() {
  if (inputs[0].value == "") {
    alert("Preencha todos os campos pessoais.");
  } else if (inputs[1].value == "") {
    alert("Preencha todos os campos pessoais.");
  } else if (inputs[2].value == "") {
    alert("Preencha todos os campos pessoais.");
  } else if (inputs[3].value == "") {
    alert("Preencha todos os campos pessoais.");
  } else if (inputs[3].value == "") {
    alert("Preencha todos os campos pessoais.");
  }
}
let bt = document.querySelector("#limpar");
bt.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i in inputs) {
    inputs[i].value = "";
  }
});
