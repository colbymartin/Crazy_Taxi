
window.addEventListener('load', function () {

    let GameModel = require('./Models/gamemodel');
    let GameView = require('./Views/gameview');
    let TotalView = require('./Views/totalview');
    let VehicleView = require('./Views/vehicleview');
    let PassModel = require('./Models/passmodel');
    let PassListView = require('./Views/passListview');
    let PassCollection = require('./Models/passList');

    let crazyTaxi = new GameModel();
    crazyTaxi.fuel = 50;
    crazyTaxi.x = 0;
    crazyTaxi.y = 0; 
    crazyTaxi.total = 0;
    crazyTaxi.costMult = 1;
    crazyTaxi.gasMult = 1;
    crazyTaxi.passY = null;
    crazyTaxi.passX = null;
    crazyTaxi.destX = null;
    crazyTaxi.destY = null;

    let list = new PassCollection();

    let gv = new GameView({
        el: document.querySelector('.status'),
        model: crazyTaxi,
    });

    let tv = new TotalView({
        el: document.querySelector('.EndSection'),
        model: crazyTaxi,
    });

    let vv = new VehicleView({
        el: document.querySelector('.chooseVehicle'),
        model: crazyTaxi,
    });

    let pv = new PassListView({
        el: document.querySelector('.passengers'),
        collection: list,
    });


    gv.render();
    pv.render();
    vv.render();
    tv.render();

    crazyTaxi.on('change:fuel', function () {
        if (crazyTaxi.fuel === 0) {
            console.log('GAME OVER');
            router.navigate('endGame');

        }
        if (crazyTaxi.x === crazyTaxi.passX && (crazyTaxi.passY * -1) === crazyTaxi.y) {
            document.querySelector('.passenger').classList.remove('passenger');
            list.updateLatest('Ride in Progress');
            crazyTaxi.randomDestination();
            document.querySelector('#table').rows[crazyTaxi.destY].cells[crazyTaxi.destX].classList.add('destination');
        }
        if (crazyTaxi.x === crazyTaxi.destX && (crazyTaxi.destY * -1) === crazyTaxi.y) {
            document.querySelector('.destination').classList.remove('destination');
            list.updateLatest('Ride Completed');
            list.addRandom();
            crazyTaxi.randomPassenger();
            crazyTaxi.calculateFare();
            document.querySelector('#table').rows[crazyTaxi.passY].cells[crazyTaxi.passX].classList.add('passenger');
        }
    })

    let AppRouter = require('./router');

    let router = new AppRouter();

    router.views = {
        game: gv,
        vehicles: vv,
        passengers: pv,
        total: tv,
    };

    gv.router = router;
    vv.router = router;
    tv.router = router;

    router.history.start({
        pushState: false,
    })

    list.addRandom();

});

