const clearButton = document.querySelector("#clear-btn");
const allowImage = document.querySelector('#allow-image');
const submitBtn = document.querySelector('#submit-btn');


clearButton.addEventListener("click", function(){
    const inputValues = document.querySelectorAll("input");
    const textArea = document.querySelector("textarea");
    for(let index = 0; index < inputValues.length; index += 1){
        inputValues[index].value = "";
        inputValues[index].checked = false;
    }
})

allowImage.addEventListener("change", function(){
    submitBtn.disabled = !allowImage.checked;
});

submitBtn.addEventListener("click", function(){
    const name = document.querySelector("#full-name");
    const email = document.querySelector("#email");
    if(name.value.length < 10 || name.value.length > 40 || email.value.length < 10 || email.value.length > 50){
        alert("Dados invalidos!");
    } else {
        alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
    }
});