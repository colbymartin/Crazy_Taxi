let Collection = require('ampersand-collection');
let PassengerModel = require('./passmodel');

let nameArray = ['Frank', 'Dennis', 'Charlie', 'Dee', 'Mac', 'Artemis', 'Pete', 'Smitty', 'Nikki', 'Matthew', 'Liam', 'Ryan', 'Margaret'];
let occupationArray = ['Banker', 'Bartender', 'Janitor', 'Actor', 'Personal Trainer', 'Barista', 'Unemployed'];

function randomName() {
    return nameArray[Math.floor(Math.random() * 13)];
};

function randomJob() {
    return occupationArray[Math.floor(Math.random() * 7)];
};

module.exports = Collection.extend({
    model: PassengerModel,

    addRandom: function () {
        this.add(new PassengerModel({
            name: randomName(),
            occupation: randomJob(),
            status: 'Waiting',
        }));
    },

    updateLatest: function (status) {
        // update the last person in the array
        // this.at() gets the persona at specified index
        this.at(this.length - 1).status = status;
    }

});