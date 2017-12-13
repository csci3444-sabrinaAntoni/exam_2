var assert = require('chai').assert;
var myPowers = require('../../../../src/common/util/math/myPowers');
var testInt = 2;
var testString = "2";
var testInt2 = 3;
var testString2 = "3";

describe('Squares and Cubes in TDD style', function() {

    describe('basic Powers in TDD style', function() {

        it('Square of ' + testInt + ' = ' + testInt * testInt),
            function() {
                let result = myPowers.getSquared(testInt);
                assert.equal(result, testInt * testInt);
            };

        it('Cube of ' + testInt2 + ' = ' + testInt2 * testInt2 * testInt2),
            function() {
                let result = myPowers.getCubed(testInt2);
                assert.equal(result, testInt2 * testInt2 * testInt2);
            };

    });

    describe('string conversion in TDD style', function() {

        it('Square of the string ' + testString + ' = ' + parseInt(testString) * parseInt(testString), function() {
            let result = myPowers.getSquared(testString);
            assert.equal(result, parseInt(testString) * parseInt(testString));
        });

        it('Cube of the string ' + testString2 + ' = ' + parseInt(testString2) * parseInt(testString2) * parseInt(testString2), function() {
            let result = myPowers.getCubed(testString2);
            assert.equal(result, parseInt(testString2) * parseInt(testString2) * parseInt(testString2));
        });

    });

    describe('type check in TDD style', function() {

        it('Square of the string ' + testString + ' should return the number ' + parseInt(testString) * parseInt(testString), function() {
            let result = myPowers.getSquared(testString);
            assert.equal(typeof(result), typeof(parseInt(testString) * parseInt(testString)));
        });

        it('Cube of the string ' + testString2 + ' should return the number ' + parseInt(testString2) * parseInt(testString2) * parseInt(testString2), function() {
            let result = myPowers.getCubed(testString2);
            assert.equal(typeof(result), typeof(parseInt(testString2) * parseInt(testString2) * parseInt(testString2)));
        });


    });
});