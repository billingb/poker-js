require('chai').should();
var PokerHand = require('../src/PokerHand.js');

describe('PokerHand', function () {
  it('should return the hand as a collection of cards', function () {
    PokerHand.indentify('2s 3s 4s 5s 6s').should.eql(['2s', '3s', '4s', '5s', '6s']);
  });
});