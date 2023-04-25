let container = document.querySelector('.container')

let buttonSpace = document.querySelector('.buttonSpace')
let button = document.createElement('button')
button.classList.add('theeButton')
buttonSpace.appendChild(button)





button.addEventListener('click', () => {
    let userInput = prompt('Please enter a number between 1 and 100')
    if(userInput < 1 || userInput > 100) {
        alert('You entered a number which was not between 1 and 100')
        userInput = prompt('Please enter a number between 1 and 100')
    }

    container.innerHTML = '';
    makeDivs(userInput)
})


function makeDivs(numOfDivs) {
    for (let i =1; i <= numOfDivs; i++){
        let square = document.createElement('div')
        square.classList.add(`square${i}`)
        container.appendChild(square)
    

    square.addEventListener('mouseover', function (){
        square.style.backgroundColor = 'blue'
    })
}
}
makeDivs(256);











