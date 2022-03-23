// Coverage area = Square footage x desired depth = square feet needed 
let squareFeet = 3500
let desiredDepthInInches = 2
let costPerCubicYard = 15

function getCoverageArea () {
  return squareFeet * desiredDepthInInches 
}
console.log(getCoverageArea());
// coverage area is 7000 square feet 


// square footage needed / 324 = cubic yards needed.
function getCubicYardsOfMulchNeeded (getCoverageArea) {
   return getCoverageArea / 324; 
}
console.log(getCubicYardsOfMulchNeeded(7000));
// for 7000 square feet, 21.604938271604937 cubic yards of mulch is needed 

let cubicYardsOfMulchNeeded = Math.round(21.604938271604937);
console.log(cubicYardsOfMulchNeeded);
// cubic yards of mulch needed round to nearest integer is 22

function costOfProject (costPerCubicYard) {
  return costPerCubicYard * cubicYardsOfMulchNeeded;
}
console.log(`'The cost to mulch the yard this season is $${costOfProject(18)}'`);
//  cost to mulch yard at $18 per cubic yard this year is $396.
