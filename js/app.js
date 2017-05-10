
window.addEventListener('load', function () {
    let GameModel = require('./gamemodel');
    let GameView = require('./gameview');

    let rowIndex = 0;
    let cellIndex = 0;
    document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');

    let crazyTaxi = new GameModel();
    crazyTaxi.fuel = 50;
    crazyTaxi.x = 0;
    crazyTaxi.y = 0; 

    let gv = new GameView({
        el: document.querySelector('section'),
        model: crazyTaxi,
    });

    gv.render();

    let upBtn = document.querySelector('#upBtn');
    upBtn.addEventListener('click', function () {
        if (rowIndex !== 0){
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
            rowIndex--;
            crazyTaxi.y++;
            crazyTaxi.fuel--;
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
        };
    }); 
    let rightBtn = document.querySelector('#rightBtn');
    rightBtn.addEventListener('click', function () {
        if (cellIndex !== 19) {
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
            cellIndex++;
            crazyTaxi.x++;
            crazyTaxi.fuel--;
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
        };
    }); 
    let downBtn = document.querySelector('#downBtn');
    downBtn.addEventListener('click', function () {
        if (rowIndex !== 19) {
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
            rowIndex++;
            crazyTaxi.y--;
            crazyTaxi.fuel--;
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
        };
    });
    let leftBtn = document.querySelector('#leftBtn');
    leftBtn.addEventListener('click', function () {
        if (cellIndex !== 0) {
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
            cellIndex--;
            crazyTaxi.x--;
            crazyTaxi.fuel--;
            document.getElementById('table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
        };
    });
});

