function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let diasDoMes = document.querySelector("#days");

  for(let dias = 0; dias < dezDaysList.length; dias += 1){
    let listaDiasDoMes = document.createElement("li");
    listaDiasDoMes.innerHTML = dezDaysList[dias];
    listaDiasDoMes.className = "day";
    diasDoMes.appendChild(listaDiasDoMes);

    if(dezDaysList[dias] == 24 || dezDaysList[dias] == 31){
        listaDiasDoMes.className = "day holiday";
    } else if(dezDaysList[dias] == 4 || dezDaysList[dias] == 11 || dezDaysList[dias] == 18){
        listaDiasDoMes.className = "day friday";
    } else if (dezDaysList[dias] == 25){
        listaDiasDoMes.className = "day holiday friday";
    }
  }

function createHolidays (string){
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = string;
  let buttonContainer = document.querySelector(".buttons-container")
  buttonContainer.appendChild(button);
}
  createHolidays("Feriado");

  // Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  
function displayElement (){
  let holidayButton = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll(".holiday")
  let bgColor = "rgb(238,238,238)";
  let newColor = "white";

  holidayButton.addEventListener("click", function() {
    for (let index = 0; index < holidays.length; index += 1) {
      if(holidays[index].style.backgroundColor === newColor){
        holidays[index].style.backgroundColor = bgColor;
      } else {
        holidays[index].style.backgroundColor = newColor;
      }
    }
  })
}
  displayElement();

function friday (string) { 
  let buttonsContainer = document.querySelector(".buttons-container")
  let fridayButton = document.createElement("button");
  fridayButton.id = "btn-friday";
  fridayButton.innerHTML = string;
  buttonsContainer.appendChild(fridayButton);
}
  friday("Sexta-feira");

function sextou (){
  let button = document.querySelector("#btn-friday");
  let sextouDays = document.getElementsByClassName("friday");
  let fridayDays = [4,11,18,25]

  button.addEventListener("click", function(){
    for(let index = 0; index < sextouDays.length; index += 1){
      if(sextouDays[index].innerHTML !== "SEXTOU!"){
        sextouDays[index].innerHTML = "SEXTOU!"
      } else {
        sextouDays[index].innerHTML = fridayDays[index];
      }
    }
  })
  }
  sextou();

function mouseOver () {
  let days = document.querySelector("#days");
  
  days.addEventListener("mouseover", function(event){
    event.target.style.fontSize = "30px";
  })
}
  
function mouseOut (){
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function(event){
    event.target.style.fontSize = "20px";

  })
}
  mouseOver();
  mouseOut();


function createTask (tarefa){
  let task = document.createElement("span");
  let taskContainer = document.querySelector(".my-tasks");

  task.innerHTML = tarefa

  taskContainer.appendChild(task);
}
  createTask("Finalizar projeto");

function addCaption (cor){
  let newDiv = document.createElement("div");
  newDiv.className = "task";
  newDiv.style.background = cor;
  let taskContainer = document.querySelector(".my-tasks");
  taskContainer.appendChild(newDiv);
}
 addCaption("green");

function addClass (){
  let colorDiv = document.querySelector(".task");
  colorDiv.addEventListener("click", function(){

    if(colorDiv.className === "task"){
      colorDiv.className = "task selected";
    } else {
      colorDiv.className = "task";
    }
  })
}
  addClass();

  
  function setDayColor() {
    let isMyDivSelected = document.getElementsByClassName("task selected");
    let myDiv = document.querySelector(".task");
    let myDivColor = myDiv.style.background;
    let ulHoldingDaysLi = document.querySelector("#days");

    ulHoldingDaysLi.addEventListener("click", function(event){
      let eventTargerColor = event.target.style.color;
      if(isMyDivSelected.length > 0 && eventTargerColor !== myDivColor){
        event.target.style.color = myDivColor;
      } else if(eventTargerColor === myDivColor && isMyDivSelected.length > 0){
        event.target.style.color = "rgb(119,119,119)"
      }
    })
  };
  setDayColor();

  // Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
  // Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
  // Ao pressionar a tecla "enter" o evento também deverá ser disparado.
  function addItemToList (){
    let textBox = document.querySelector("#task-input");
    let addButton = document.querySelector("#btn-add");
    let taskList = document.querySelector(".task-list");
    
    addButton.addEventListener("click", function(){
      if(textBox.value.length > 0){
        newLi = document.createElement("li");
        newLi.innerText = textBox.value;
        taskList.appendChild(newLi);
        textBox.value = "";
      } else {
        alert("ERRO: adicione mais caracteres");
      }
    })

    textBox.addEventListener("keyup", function(event){
      if(event.key === "Enter" && textBox.value.length > 0){
        newLi = document.createElement("li");
        newLi.innerText = textBox.value;
        taskList.appendChild(newLi);
        textBox.value = "";
      }
    })
  }
  addItemToList();

  // fim do exercício :)
