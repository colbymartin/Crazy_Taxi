let Router = require('ampersand-router');

module.exports = Router.extend({
    routes: {
        'viewGame' : 'showGame',
    },
    showGame: function () {
        console.log('showing game');
        this.views.vehicles.el.classList.add('hide');
        this.views.game.el.classList.remove('hide');
        this.views.passengers.el.classList.remove('hide');
        document.querySelector('#table').classList.remove('hide');
    },
});