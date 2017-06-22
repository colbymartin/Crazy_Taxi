let Router = require('ampersand-router');

module.exports = Router.extend({
    routes: {
        'home' : 'goHome',
        'viewGame' : 'showGame',
        'endGame' : 'endGame',
    },
    showGame: function () {
        this.views.vehicles.el.classList.add('hide');
        this.views.game.el.classList.remove('hide');
        this.views.passengers.el.classList.remove('hide');
        document.querySelector('#table').classList.remove('hide');
    },
    endGame: function () {
        this.views.game.el.classList.add('hide');
        this.views.total.el.classList.remove('hide');
        this.views.passengers.el.classList.add('hide');
        document.querySelector('#table').classList.add('hide');
    },
    goHome: function () {
        this.views.vehicles.el.classList.remove('hide');
        this.views.game.el.classList.add('hide');
        this.views.passengers.el.classList.add('hide');
        document.querySelector('#table').classList.add('hide');

    }

});