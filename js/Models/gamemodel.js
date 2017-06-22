let State = require('ampersand-state');

module.exports = State.extend({
    props: {
        fuel: 'number',
        x: 'number',
        y: 'number',
        passX: 'number',
        passY: 'number',
        destX: 'number', 
        destY: 'number',
        costMult: 'number',
        gasMult: 'number',
        stationX: 'number',
        stationY: 'number',
        total: 'number',
    },
    randomPassenger: function () {
        this.passY = Math.floor(Math.random() * 19);
        this.passX = Math.floor(Math.random() * 19);
    },
    randomDestination: function () {
        this.destY = Math.floor(Math.random() * 19);
        this.destX = Math.floor(Math.random() * 19);
    },
    fillUp: function () {
        this.fuel = 50;
    },
    luxMult: function () {
        this.costMult = 2;
        this.gasMult = 2;
    },
    moveUp: function () {
        this.y++;
        this.fuel = this.fuel - (1 * this.gasMult);
    },
    moveRight: function () {
        this.x++;
        this.fuel = this.fuel - (1 * this.gasMult);
    },
    moveDown: function () {
        this.y--;
        this.fuel = this.fuel - (1 * this.gasMult);
    },
    moveLeft: function () {
        this.x--;
        this.fuel = this.fuel - (1 * this.gasMult);
    },
    calculateFare: function () {
        this.total = this.total + (10 * this.costMult);
    },
});