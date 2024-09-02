const {default: TestRunner } = require("jest-runner");
const addFive =  require('./addFive'); //function is in the same directory

test('returns the numeber plus 5', () =>{
    expect(addFive(1)).toBe(6);
})