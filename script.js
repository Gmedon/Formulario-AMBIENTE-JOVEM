let verificarheight = window.screen.height;
let main = document.querySelector('main')
main.style.height = verificarheight + "px";
let inputs = document.querySelectorAll('.input-info')
let bt = document.querySelector('.bt')
bt.addEventListener("click", function (event) {
    if (inputs[0].value == "") {
        event.preventDefault()
        inputs[0].style.border = "2px solid red";
        setTimeout('inputs[0].style.border = "2px solid #999"', 2000)
    } else if (inputs[1].value == "") {
        event.preventDefault()
        inputs[1].style.border = "2px solid red";
        setTimeout('inputs[1].style.border = "2px solid #999"', 2000)
    } else if (inputs[2].value == "") {
        event.preventDefault()
        inputs[2].style.border = "2px solid red";
        setTimeout('inputs[2].style.border = "2px solid #999"', 2000)
    } else if (inputs[3].value == "") {
        event.preventDefault()
        inputs[3].style.border = "2px solid red";
        setTimeout('inputs[3].style.border = "2px solid #999"', 2000)
    }
});