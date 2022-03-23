// Coverage area = Square footage x desired depth
let squareFeet = 1000
let desiredDepthInInches = 2
let costPerCubicYard = 15

function getCoverageArea () {
  return squareFeet * desiredDepthInInches 
}
console.log(getCoverageArea());
// coverage area is 2000 square feet 


// coverage area / 324 = cubic yards of mulch needed
function getCubicYardsOfMulchNeeded (getCoverageArea) {
   return getCoverageArea / 324; 
}
console.log(getCubicYardsOfMulchNeeded(getCoverageArea()));
//cubic yards of mulch needed is 6.172839506172839

let cubicYardsOfMulch = getCubicYardsOfMulchNeeded(getCoverageArea());
let cubicYardsOfMulchRounded = Math.round(cubicYardsOfMulch);
console.log(cubicYardsOfMulchRounded);
// cubic yards of mulch needed rounded to nearest whole number is 6

function costOfProject (costPerCubicYard) {
  return costPerCubicYard * cubicYardsOfMulchRounded;
}
console.log(`'The cost to refresh the mulch this season is $${costOfProject(18)}.'`);
// 'The cost to refresh the mulch this season is $108.'
