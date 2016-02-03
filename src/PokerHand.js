var exports = module.exports = {};
var _ = require('lodash');

function getCards(hand) {
  return _.split(hand, ' ');
}

exports.indentify = function(hand) {
  var cards = getCards(hand);
  console.log("hand " + cards);
  return cards;
};
