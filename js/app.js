
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
    crazyTaxi.delivered = false;
    crazyTaxi.passY = null;
    crazyTaxi.passX = null;


    let pass1 = new PassModel();
    pass1.name = 'Nancy';
    pass1.occupation = 'Doctor';
    pass1.status = "Awaiting Ride";

    let pass2 = new PassModel();
    pass2.name = 'Bob';
    pass2.occupation = 'Bird Law';
    pass2.status = "Awaiting Ride";

    let list = new PassCollection([pass1, pass2]);

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

    router.history.start({
        pushState: false,
    })
});

