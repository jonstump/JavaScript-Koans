
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    equal(true, oneIsTruthy, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    equal(true, negativeOneIsTruthy, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    equal(false, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    equal(false, nullIsTruthy, 'is null truthy?');
});
