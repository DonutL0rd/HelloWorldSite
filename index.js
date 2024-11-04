var buttonClicked = true; 
var i = 1;
const textElement = document.getElementById("header");

document.getElementById("yourButtonId").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword2").value;
    console.log(email,password);
 

    if(email == 'hello' && password =='world'){ 
        textElement.innerText = "help";
        console.log('worked');
        window.location.href = "index.html"
    }
    
});

  