const board = document.createElement('div')
board.classList.add('board')
document.querySelector('body').append(board)

const makeGrid = (num) => {
    for (let i = 0; i<num; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        
        for (let j = 0; j<num; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            handleHover(square)
            row.append(square)
        }

        board.append(row)
    }
}

function randomColor() {
    const h = Math.random() * 360;
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 91);

    return `hsl(${h} ${s}% ${l}%)`
}

function handleHover(square) {
    square.addEventListener('mouseover', (e)=>{
        if (e.target.style.backgroundColor === board.style.backgroundColor) {
            e.target.style.backgroundColor = randomColor()
        }
    })
}

makeGrid(16)