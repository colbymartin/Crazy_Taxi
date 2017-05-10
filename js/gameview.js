let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#game-template').innerHTML,
    bindings: {
        'model.fuel': '.fuel',
        'model.x' : '.Xlocation',
        'model.y' : '.Ylocation',
    },
    render: function () {
        let model = this.model;
        this.renderWithTemplate();
        // let upBtn = document.querySelector('#upBtn');
        // upBtn.addEventListener('click', function () {
        //     model.y++;
        //     model.fuel--;
        //     rowIndex--;
        //     document.getElementById('#table').rows[rowIndex].cells[cellIndex].classList.add('highlight');
        // }); 
        // let rightBtn = document.querySelector('#rightBtn');
        // rightBtn.addEventListener('click', function () {
        //     model.x++;
        //     model.fuel--;
        // }); 
        // let downBtn = document.querySelector('#downBtn');
        // downBtn.addEventListener('click', function () {
        //     model.y--;
        //     model.fuel--;
        // }); 
        // let leftBtn = document.querySelector('#leftBtn');
        // leftBtn.addEventListener('click', function () {
        //     model.x--;
        //     model.fuel--;
        // }); 
    }
})