var buttonClicked = true; 
console.log("test")
var i = 1;
function changeText() {
    const textElement = document.getElementById("text");
    if (buttonClicked){ 
        console.log("button clicked x " + i++)
        textElement.innerText = "YES";
        buttonClicked = false;
    }else{
        console.log("button clicked x "+ i++)
        textElement.innerText = "DOES CRAP THIS WORK"
        buttonClicked = true;
    }
  }
  