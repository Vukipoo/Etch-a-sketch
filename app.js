let container = document.querySelector('.container')





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









