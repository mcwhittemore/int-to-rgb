var intToRGB = require('../');
var assert = require('assert');

it('works with an int', function() {
  var rgb = intToRGB(255);
  assert.deepEqual(rgb, {
    red: 0,
    green: 0,
    blue: 255
  })
});
