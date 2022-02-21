const clearButton = document.querySelector("#clear-btn");
const allowImage = document.querySelector('#allow-image');
const submitBtn = document.querySelector('#submit-btn');

function clearAll (){
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < inputs.length; index +=1){
    inputs[index].value = "";
    inputs[index].checked = false;
  }
  textArea.value = "";
}

function allowImageFunction (){
  submitBtn.disabled = !allowImage.checked;
}

function isValid (){
  const name = document.querySelector("#full-name").value.length;
  const email = document.querySelector("#email").value.length;
  const textArea = document.querySelector("textarea");
  if(email < 10 || email > 50 || name < 10 || name > 40 || textArea.value.length > 500){
    return false;
  } else {
    return true;
  }
}

function validationInput (event){
  event.preventDefault();
  const validation = isValid();
  if(validation === false){
    alert ("Dados inválidos");
  } else {
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.")
  }
}

window.onload = function(){
  clearButton.addEventListener("click", clearAll);
  allowImage.addEventListener("change", allowImageFunction);
  submitBtn.addEventListener("click", validationInput);
};