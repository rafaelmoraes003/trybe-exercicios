window.onload = function(){

let buttonBackgroundColor = document.getElementById("bgcolor");
buttonBackgroundColor.addEventListener("keyup", function(event){
  if(event.key === "Enter" && buttonBackgroundColor.value.length > 0){
    document.body.style.background = buttonBackgroundColor.value;
    let save = localStorage.setItem("cor-de-fundo", buttonBackgroundColor.value);
  } 
})


let buttonTextColor = document.getElementById("text-color");
buttonTextColor.addEventListener("keyup", function(event){
  if(event.key === "Enter" && buttonTextColor.value.length > 0){
    document.body.style.color = buttonTextColor.value;
    localStorage.setItem("cor-do-texto", buttonTextColor.value);
  }
})

let buttonFontSize = document.getElementById("font-size");
buttonFontSize.addEventListener("keyup", function(event){
  if(event.key === "Enter" && buttonFontSize.value.length > 0){
    document.body.style.fontSize = parseInt(buttonFontSize.value) + "px"
    localStorage.setItem("tamanho-da-fonte", buttonFontSize.value + "px");
  }
})

let buttonLineHeight = document.getElementById("line-height");
buttonLineHeight.addEventListener("keyup", function(event){
  if(event.key === "Enter" && buttonLineHeight.value.length > 0){
    document.body.style.lineHeight = parseFloat(buttonLineHeight.value);
    localStorage.setItem("espacamento", buttonLineHeight.value);
  }
})

let buttonFontFamily = document.getElementById("font-family");
buttonFontFamily.addEventListener("keyup", function(event){
  if(event.key === "Enter" && buttonFontFamily.value.length > 0){
    document.body.style.fontFamily = buttonFontFamily.value;
    localStorage.setItem("tipo-da-fonte", buttonFontFamily.value);
  }
})

  let savedBackground = localStorage.getItem("cor-de-fundo")
  document.body.style.backgroundColor = savedBackground;

  let savedColor = localStorage.getItem("cor-do-texto");
  document.body.style.color = savedColor;

  let savedFontSize = localStorage.getItem("tamanho-da-fonte");
  document.body.style.fontSize = savedFontSize;

  let savedLineHeight = localStorage.getItem("espacamento");
  document.body.style.lineHeight = savedLineHeight;

  let savedFontFamily = localStorage.getItem("tipo-da-fonte");
  document.body.style.fontFamily = savedFontFamily;
}