For each problem below, write a loop that prints the given output. Assume a global array called animals is defined as follows:

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
For example:
Problem:

rat
cat
butterfly
marmot
ocelot
Solution:

for(var i=0; i<animals.length; i++) {
 console.log(animals[i]);
}
Problem:
  md rat cat butterfly marmot

  md rat butterfly ocelot

  md ocelot marmot butterfly cat rat

  md rat cat cat butterfly butterfly marmot marmot ocelot