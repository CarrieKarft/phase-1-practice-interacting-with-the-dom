let counterValue = document.getElementById('counter').innerText


 const timerCount = function(){ setInterval(() => {
    // let counterValue = document.getElementById('counter').innerHTML;
    let h1 = document.getElementById('counter') 
    counterValue ++
    h1.textContent = counterValue
}, 1000)
}

addEventListener('click', (event) => {
    // let counterValue = document.getElementById('counter').innerText
    if (event.target === document.getElementById('minus')) {
        let h1 = document.getElementById('counter') 
        counterValue --
        h1.textContent = counterValue
        console.log(counterValue)
    } else if (event.target === document.getElementById('plus')) {
        let h1 = document.getElementById('counter') 
        counterValue ++
        h1.textContent = counterValue
        console.log(counterValue)
    } else if (event.target === document.getElementById('heart')) {
        likingNumbers()
        console.log(event.target)
        console.log("heart")
    } else if  (event.target === document.getElementById('pause')) {
        console.log(event.target)
        pausingTheTimer()
    } else if (event.target === document.getElementById('modPause')) {
        console.log(event.target)
        resumingTheTimer()
    }
})

function likingNumbers() {
    const li = document.createElement('li')
    li.textContent = `${counterValue} has been liked 1 times`
    const ul = document.getElementsByClassName('likes')
    console.log(ul)
    ul[0].appendChild(li);
}

function pausingTheTimer() {
    clearInterval(timerCount);
    const pause = document.getElementById('pause')
    pause.setAttribute("id", "modPause")
    pause.textContent = "resume"
}

function resumingTheTimer() {
    timerCount()
    const pause = document.getElementById("modPause")
    pause.setAttribute("id", "pause")
    pause.textContent = "pause"
}