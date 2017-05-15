let State = require('ampersand-state');

module.exports = State.extend({
    props: {
        fuel: 'number',
        x: 'number',
        y: 'number',
        passX: 'number',
        passY: 'number',
        costMult: 'number',
        gasMult: 'number',
        total: 'number',
        delivered: 'boolean',
        // waiting: 'boolean',
    },
    randomPassenger: function () {
        this.passY = Math.floor(Math.random() * 19);
        this.passX = Math.floor(Math.random() * 19);
    },
    luxMult: function () {
        this.costMult = 2;
        this.gasMult = 2;
    },
    changeDeliv: function () {
        if (this.delivered === false) {
            this.delivered = true;
        } else {
            this.delivered = true;
        }
    },
    moveUp: function () {
        this.y++;
        this.fuel = this.fuel - (1 * this.gasMult);
        this.total = this.total + (10 * this.costMult);
    },
    moveRight: function () {
        this.x++;
        this.fuel = this.fuel - (1 * this.gasMult);
        this.total = this.total + (10 * this.costMult);
    },
    moveDown: function () {
        this.y--;
        this.fuel = this.fuel - (1 * this.gasMult);
        this.total = this.total + (10 * this.costMult);
    },
    moveLeft: function () {
        this.x--;
        this.fuel = this.fuel - (1 * this.gasMult);
        this.total = this.total + (10 * this.costMult);
    }
});