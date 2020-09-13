var util = require('./Program1')
const Program1 = require('./Program1')

test("add Two Number", function(){
    var result = Program1.sum(2,7);
    var expected =6;
    expect(result).toBe(expected)
});