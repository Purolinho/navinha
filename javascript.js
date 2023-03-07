var nave = document.getElementById("nave")
var x = 0
let y = 0


document.addEventListener("keypress", (e) => {

    let x = nave.offsetLeft

    var keypress = e.keyCode
    var key = String.fromCharCode(keypress)

    if(key == "d") {
        x=+10
        nave.style.transform += "translateX("+x+'px)'
    }
    if(key == "a") {
        x=-10
        nave.style.transform += "translateX("+x+'px)'
    }

    if(key == " ") {
        var laser = document.createElement('div')
        laser.setAttribute("id", "laser")
        laser.innerHTML = ""
        nave.appendChild(laser)
    }
    
})  