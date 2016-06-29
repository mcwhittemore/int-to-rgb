var intToRGB = require('../');
var assert = require('assert');

it('works with an int', function() {
  var rgb = intToRGB(2763306);
  assert.deepEqual(rgb, {
    red: 42,
    green: 42,
    blue: 42
  })
});

it('0 is all zeros', function() {
  var rgb = intToRGB(0);
  assert.deepEqual(rgb, {
    red: 0,
    green: 0,
    blue: 0
  })
});

it('16777215 is all 255s', function() {
  var rgb = intToRGB(16777215);
  assert.deepEqual(rgb, {
    red: 255,
    green: 255,
    blue: 255
  })
});

it('doesn\'t fail on any number between 0 and 16777215', function() {
  var check = function(i, rgb, name) {
    if (rgb[name] < 0 || rgb[name] > 255) {
      console.log(i, rgb);
      throw new Error('Invalid value on '+name);
    }
  }

  for (var i=0; i<=16777215; i++) {
    var rgb = intToRGB(i);
    check(i, rgb, 'red');
    check(i, rgb, 'green');
    check(i, rgb, 'blue');
  }
});

it('throws an error when its not a number', function() {
  assert.throws(function() {
    intToRGB({});
  });
});

it('throws an error when its a float', function() {
  assert.throws(function() {
    intToRGB(9.9);
  });
});

it('throws an error when its less than zero', function() {
  assert.throws(function() {
    intToRGB(-1);
  });
});

it('throws an error when its greater than 16777215', function() {
  assert.throws(function() {
    intToRGB(16777216);
  });
});
