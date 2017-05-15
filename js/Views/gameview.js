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

        // Any DOM updates that occur after model changes.
        this.model.on('change:delivered', function () {
            document.querySelector('.destination').classList.remove('destination');
            
        });
    },
    events: {
        'click #upBtn' : 'upClick',
        'click #rightBtn' : 'rightClick',
        'click #downBtn' : 'downClick',
        'click #leftBtn' : 'leftClick',
    },
    initLocation: function () {
        document.querySelector('#table').rows[this.model.y].cells[this.model.x].classList.add('highlight');
    },
    upClick: function () {
        if (this.model.y !== 0){ 
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveUp();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
            if (this.model.y === (this.model.passY * -1) && this.model.x === this.model.passX) {
                console.log('picked up');
                this.model.changeDeliv();
            }
        }
    },
    rightClick: function () {
        if (this.model.x !== 19) {
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveRight();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
            if (this.model.y === (this.model.passY * -1) && this.model.x === this.model.passX) {
                console.log('delivered');
                // this.model.pickUp();
                this.model.changeDeliv();
            }
        }
    },
    downClick: function () {
        if (this.model.y !== 19) {
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveDown();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
            if (this.model.y === (this.model.passY * -1) && this.model.x === this.model.passX) {
                console.log('delivered');
                this.model.changeDeliv();
            }
        }
    },
    leftClick: function () {
        if (this.model.x !== 0) {
            document.querySelector('.highlight').classList.remove('highlight');
            this.model.moveLeft();
            document.querySelector('#table').rows[-1 * this.model.y].cells[this.model.x].classList.add('highlight');
            if (this.model.y === (this.model.passY * -1) && this.model.x === this.model.passX) {
                console.log('delivered');
                this.model.changeDeliv();
            }
        }
    },
    render: function () {
        this.renderWithTemplate();
    },
})