var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var pt = function(obj) {
  var x = obj.x; var y = obj.y;
  var z = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
  return z;
}

var result = input.map(pt);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
