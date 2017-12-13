var assert = require('chai').assert;
var myPowers = require('../../../../src/common/util/math/myPowers');
var testInt = 2;
var testString = "2";

describe('mySquare in TDD style', function() {

    it('Square of ' + testInt + ' = ' + testInt * testInt),
        function() {
            let result = myPowers.getSquared(testInt);
            assert.equal(result, testInt * testInt);
        };

    it('Square of the string ' + testString + ' = ' + parseInt(testString) * parseInt(testString), function() {
        let result = myPowers.getSquared(testString);
        assert.equal(result, parseInt(testString) * parseInt(testString));
    });

    it('Square of the string ' + testString + ' should return the number ' + parseInt(testString) * parseInt(testString), function() {
        let result = myPowers.getSquared(testString);
        assert.equal(typeof(result), typeof(parseInt(testString) * parseInt(testString)));
    });

});