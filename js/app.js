
window.addEventListener('load', function () {
    // let passRow = 0;
    // let passColumn = 0;
    
    function randomPassenger() {
        passRow = Math.floor(Math.random() * 19);
        passColumn = Math.floor(Math.random() * 19);
        document.querySelector('#table').rows[passRow].cells[passColumn].classList.add('destination');
    }

    // function checkLocation() {
    //     if (rowIndex === passRow && passColumn === cellIndex){
    //         console.log('delivered');
    //         document.querySelector('#table').rows[passRow].cells[passColumn].classList.remove('destination');

    //     }
    // }

    let GameModel = require('./Models/gamemodel');
    let GameView = require('./Views/gameview');
    let TotalView = require('./Views/totalview');

    // let rowIndex = 0;
    // let cellIndex = 0;
    // document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');

    // let costMult = 1;

    let crazyTaxi = new GameModel();
    crazyTaxi.fuel = 50;
    crazyTaxi.x = 0;
    crazyTaxi.y = 0; 
    crazyTaxi.total = 0;
    crazyTaxi.costMult = 1;
    crazyTaxi.delivered = false;
    crazyTaxi.passY = null;
    crazyTaxi.passX = null;


    let gv = new GameView({
        el: document.querySelector('.status'),
        model: crazyTaxi,
    });

    gv.render();

    let tv = new TotalView({
        el: document.querySelector('.EndSection'),
        model: crazyTaxi,
    });

     tv.render();


    let hybridBtn = document.querySelector('.hybridBtn');
    hybridBtn.addEventListener('click', function () {
        console.log('hybrid');
        randomPassenger();
    });

    let luxBtn = document.querySelector('.luxBtn');
    luxBtn.addEventListener('click', function () {
        costMult = 2;
        randomPassenger();
    })

    // let upBtn = document.querySelector('#upBtn');
    // upBtn.addEventListener('click', function () {
    //     if (rowIndex !== 0){
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
    //         rowIndex--;
    //         crazyTaxi.y++;
    //         crazyTaxi.fuel--;
    //         Cost.total = Cost.total + (10 * costMult);
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
    //         checkLocation();
    //     };
    // }); 
    // let rightBtn = document.querySelector('#rightBtn');
    // rightBtn.addEventListener('click', function () {
    //     if (cellIndex !== 19) {
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
    //         cellIndex++;
    //         crazyTaxi.x++;
    //         crazyTaxi.fuel--;
    //         Cost.total = Cost.total + (10 * costMult);
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
    //         // checkLocation();
    //     };
    // }); 
    // let downBtn = document.querySelector('#downBtn');
    // downBtn.addEventListener('click', function () {
    //     if (rowIndex !== 19) {
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
    //         rowIndex++;
    //         crazyTaxi.y--;
    //         crazyTaxi.fuel--;
    //         Cost.total = Cost.total + (10 * costMult);
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
    //         // checkLocation();
    //     };
    // });
    // let leftBtn = document.querySelector('#leftBtn');
    // leftBtn.addEventListener('click', function () {
    //     if (cellIndex !== 0) {
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.remove('highlight');
    //         cellIndex--;
    //         crazyTaxi.x--;
    //         crazyTaxi.fuel--;
    //         Cost.total = Cost.total + (10 * costMult);
    //         document.querySelector('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
    //         // checkLocation();
    //     };
    // });
});

