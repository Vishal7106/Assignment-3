function sayhello() {
    let va = document.getElementById("nameInput").value.trim();

    if (va === "") {
        document.getElementById("result").innerText = ""; 
    } else {
        document.getElementById("result").innerText = va + " !";
    }
}

function changeColor( element,color){
    
    element.style.backgroundColor = 'red';
    element.style.backgroundColor = color;
      element.style.color = "white";
      element.style.borderColor = color;
      
}

