module.exports = {
    /** 
     * @return
     */
    getSquared: function(number) {
        var mySquare = require('./mySquare');
        number = parseInt(number);
        number = mySquare.toSquare(number);
        return number;
    },

    getCubed: function(number) {
        var myCube = require('./myCube');
        number = parseInt(number);
        number = myCube.toCube(number);
        return number;
    }
}