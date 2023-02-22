const button = document.querySelector('button')
const board = document.createElement('div')
board.classList.add('board')
document.querySelector('body').append(board)

button.addEventListener('click', () => {
    let size = 0;
    while (size < 2 || size > 100) {
        size = prompt('How big do you want your grid? choose between 2 and 100')
    }
    board.replaceChildren()
    makeGrid(size)
})

const makeGrid = (num) => {
    for (let i = 0; i<num; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        
        for (let j = 0; j<num; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = 'rgb(0 0 0 / 0)'
            square.dataset.aValue = 0
            handleHover(square)
            row.append(square)
        }

        board.append(row)
    }
}

// function randomColor() {
//     const h = Math.random() * 360;
//     const s = Math.floor(Math.random() * 101);
//     const l = Math.floor(Math.random() * 91);
    
//     return `hsl(${h} ${s}% ${l}%)`
// }

function handleHover(square) {
    square.addEventListener('mouseover', (e)=>{
        // if (e.target.style.backgroundColor === board.style.backgroundColor) {
        //     e.target.style.backgroundColor = randomColor()
        // }
        let value = Number(e.target.dataset.aValue)
        console.log(value)
        if (value < 100) {
            value += 10
            e.target.dataset.aValue = value
            e.target.style.backgroundColor = `rgb(0 0 0 / ${value}%)`
        }
    })
}

makeGrid(16)