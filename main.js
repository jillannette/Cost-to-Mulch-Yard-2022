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
console.log(getCubicYardsOfMulchNeeded(2000));
// for 2000 square feet, 6.172839506172839 cubic yards of mulch is needed 

let cubicYardsOfMulchNeeded = Math.round(6.172839506172839);
console.log(cubicYardsOfMulchNeeded);
// cubic yards of mulch needed rounded to nearest whole number is 6

function costOfProject (costPerCubicYard) {
  return costPerCubicYard * cubicYardsOfMulchNeeded;
}
console.log(`'The cost to refresh the mulch this season is $${costOfProject(18)}.'`);
// 'The cost to refresh the mulch this season is $108.'
