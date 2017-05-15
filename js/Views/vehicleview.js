let View = require('ampersand-view'); 

module.exports = View.extend({
    template: document.querySelector('#vehicle-template').innerHTML,
    events: {
        'click .hybridBtn' : 'chooseHybrid',
        'click .luxBtn' : 'chooseLux',
    },
    chooseHybrid: function () {
        this.model.randomPassenger();
        document.querySelector('#table').rows[this.model.passY].cells[this.model.passX].classList.add('passenger');
    },
    chooseLux: function () {
        this.model.randomPassenger();
        document.querySelector('#table').rows[this.model.passY].cells[this.model.passX].classList.add('passenger');
        this.model.luxMult();
    }, 
    render: function () {
        this.renderWithTemplate();
    }
});