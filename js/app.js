
window.addEventListener('load', function () {

    let GameModel = require('./Models/gamemodel');
    let GameView = require('./Views/gameview');
    let TotalView = require('./Views/totalview');
    let VehicleView = require('./Views/vehicleview');

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

    let vv = new VehicleView({
        el: document.querySelector('.chooseVehicle'),
        model: crazyTaxi,
    });
    
    vv.render();
});

