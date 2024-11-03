var buttonClicked = true; 
console.log("test")
var i = 1;
function changeText() {
    const textElement = document.getElementById("text");
    if (buttonClicked){ 
        console.log("button clicked x " + i++)
        textElement.innerText = "You clicked the button!";
        buttonClicked = false;
    }else{
        console.log("button clicked x "+ i++)
        textElement.innerText = "You clicked it again!"
        buttonClicked = true;
    }
  }
  