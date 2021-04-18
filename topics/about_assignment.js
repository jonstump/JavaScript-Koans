
module("About Assignment (topics/about_assignment.js)");

test("local variables", function() {
    let temp = 1;
    equal(temp, 1, "Assign a value to the variable temp");
});

test("global variables", function() {
    temp = 1; // Not using let is an example. Always use let in practise.
    equal(window.1, temp, 'global variables are assigned to the window object');
});
