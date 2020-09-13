var multiply = require('./Program2')
const Program2 = require('./Program2')

test("Multiply two no",function(){
    var result = Program2.multiply(2, 7);
    var expected = 9;
    expect((result).tobe(expected))
});
