assert = require('chai').assert;
var myPowers = require('../../../../src/common/util/math/myPowers');
var testInt = 3;
var testString = "3";


describe('myCube in TDD style', function() {

    it('Cube of ' + testInt + ' = ' + testInt * testInt * testInt),
        function() {
            let result = myPowers.getCubed(testInt);
            assert.equal(result, testInt * testInt * testInt);
        };

    it('Cube of the string ' + testString + ' = ' + parseInt(testString) * parseInt(testString) * parseInt(testString), function() {
        let result = myPowers.getCubed(testString);
        assert.equal(result, parseInt(testString) * parseInt(testString) * parseInt(testString));
    });

    it('Cube of the string ' + testString + ' should return the number ' + parseInt(testString) * parseInt(testString) * parseInt(testString), function() {
        let result = myPowers.getCubed(testString);
        assert.equal(typeof(result), typeof(parseInt(testString) * parseInt(testString) * parseInt(testString)));
    });

});