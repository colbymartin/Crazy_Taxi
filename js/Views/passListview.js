let View = require('ampersand-view');
let PassListView = require('./passview');

module.exports = View.extend({
    template: document.querySelector('#passenger-list-template').innerHTML,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, PassListView, this.el.querySelector('ul'));
    },
});