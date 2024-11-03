var buttonClicked = true; 

function changeText() {
    const textElement = document.getElementById("text");
    if (buttonClicked == true){ 
        textElement.innerText = "You clicked the button!";
        buttonClicked = false;
    }else{
        textElement.innerText = "You clicked it again!"
        buttonClicked = true;
    }
  }
  