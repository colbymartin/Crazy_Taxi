let State = require('ampersand-state');

module.exports = State.extend({
    props: {
        fuel: 'number',
        x: 'number',
        y: 'number',
        passX: 'number',
        passY: 'number',
        costMult: 'number',
        total: 'number',
        delivered: 'boolean',
    },
    randomPassenger: function () {
        this.passY = Math.floor(Math.random() * 19);
        this.passX = Math.floor(Math.random() * 19);
    },
    checkLocation: function () {
        if (this.x === this.passX && this.y === this.passY) {
            console.log('delivered');
            this.delivered = true;
        }
    },
    moveUp: function () {
        this.y++;
        this.fuel--;
        this.total = this.total + (10 * this.costMult);
    },
    moveRight: function () {
        this.x++;
        this.fuel--;
        this.total = this.total + (10 * this.costMult);
    },
    moveDown: function () {
        this.y--;
        this.fuel--;
        this.total = this.total + (10 * this.costMult);
    },
    moveLeft: function () {
        this.x--;
        this.fuel--;
        this.total = this.total + (10 * this.costMult);
    }
});