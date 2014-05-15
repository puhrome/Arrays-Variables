/**
 * Arrays Variables Created by Phirom Yim on 5/15/14.
 *
 */

var muppetNames = ["Kermit", "Miss Piggy", "Gonzo", "Rizzo"];//arrays fall into [] brackets always comes in pairs
//each of each item have an index number starting at 0 [0,1,2,3]

console.log(muppetNames);
//if we need to get to one of the names
//we need to use array access notation

console.log(muppetNames[0]);//array access notation for index 0
console.log(muppetNames[1]);//array access notation for index 1

muppetNames[1] = "Rizzo"; //if you wanted to change the index
console.log(muppetNames[1]);

var num = 3;
console.log(muppetNames[num]);// will print Gonzo or index 3

muppetNames [4] = "Fozzy";//array access notation to add Fozzy in array

