# int-to-rgb

This module takes a number between `0` and `16777215` inclusive and converts it into an rgb object.

## Install

`npm install int-to-rgb`

## Usage

```js
var intToRGB = require('int-to-rgb');
var rgb = intToRGB(2763306);
console.log(rgb)
/*
{
  red: 42,
  green: 42,
  blue: 42
}
*/
```
