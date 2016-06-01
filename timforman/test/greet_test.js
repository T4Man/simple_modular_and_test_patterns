const expect = require('chai').expect;
const greet = require(__dirname + '/../lib/greet.js');

describe('test for greet.js', function() {
  it('greet(Tim) should return "Hello, Tim"', function(){
    expect(greet('Tim')).to.eql('Hello, Tim.');
  });
});

describe('test for greet.js bonus', function() {
  it('greet(whomever) should return "Hello, whomever"', function(){
    expect(greet(process.argv[2])).to.eql('Hello, ' + process.argv[2] + '.');
  });
});
