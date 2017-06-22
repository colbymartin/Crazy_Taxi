let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#game-template').innerHTML,
    bindings: {
        'model.fuel': '.fuel',
        'model.x' : '.Xlocation',
        'model.y' : '.Ylocation',
    },
    initialize: function () {
        this.initLocation();
    },
    events: {
        'click #upBtn' : 'upClick',
        'click #rightBtn' : 'rightClick',
        'click #downBtn' : 'downClick',
        'click #leftBtn' : 'leftClick',
    },
    initLocation: function () {
        document.querySelector('#table').rows[this.model.y].cells[this.model.x].classList.add('highlight');
        document.querySelector('#table').rows[this.model.stationY].cells[this.model.stationX].classList.add('gas');
    },
    upClick: function () {
        if (this.model.y !== 0){ 
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveUp();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
        }
    },
    rightClick: function () {
        if (this.model.x !== 19) {
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveRight();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
        }
    },
    downClick: function () {
        if (this.model.y !== -19) {
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveDown();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
        }
    },
    leftClick: function () {
        if (this.model.x !== 0) {
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveLeft();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
        }
    },
    render: function () {
        this.renderWithTemplate();
    },
})