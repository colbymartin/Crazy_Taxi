let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#total-template').innerHTML,
    bindings: {
        'model.total' : '.total'
    },
    render: function () {
        this.renderWithTemplate();
    }
})