const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        if(e.target === "Success"){
            alert("hello")
        }
        else{
            alert("world")
        }
    });
}