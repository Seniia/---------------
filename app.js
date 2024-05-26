let counter = 0;
let cells = document.querySelectorAll('#field td');
let header = document.getElementById("header");

function isVictory() {
    let combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}

function tap(event) {
    if (counter % 2 == 0) {
        event.target.innerHTML = '<img src="img/kross.png" width=100>';
    } else {
        event.target.innerHTML = '<img src="img/heard.png" width=100>';
    }
    if (isVictory()) {
        for (let cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (counter % 2 == 0) {
            header.innerHTML = "X is winner";
        } else {
            header.innerHTML = "O is winner";
        }
    } else if (counter == 8) {
        header.innerHTML = "Draw";
    }
    counter++;
    event.target.removeEventListener('click', tap);
}

function startGame() {
    header.innerText = 'Tic Tac Toe';
    counter = 0;
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}

startGame();