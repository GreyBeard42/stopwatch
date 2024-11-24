let todays = Math.round(Math.random()*80)+20
today.innerText = show(todays, ".")

let time = 0
let on = false

box.addEventListener("click", () => {
    if(on) {
        on = false
        if(time == todays) scoreDisply.innerText++
        time = 0
    } else {
        if(!on) on = 2
        else on = 1
    }
})

setInterval(() => {
    if(on) {
        time++
        timeDisply.innerText = show(time)
    }
}, 10)

function show(val, sybl=":") {
    let temp = val%100
    if((val%100)<10) temp = "0"+temp
    return(Math.floor(val/100)+sybl+temp)
}

mono.addEventListener("click", () => {
    if(today.style.fontFamily == "Beardy") {
        today.style.fontFamily = "monospace"
        timeDisply.style.fontFamily = "monospace"
        scoreDisply.style.fontFamily = "monospace"
    } else {
        today.style.fontFamily = "Beardy"
        timeDisply.style.fontFamily = "Beardy"
        scoreDisply.style.fontFamily = "Beardy"
    }
})