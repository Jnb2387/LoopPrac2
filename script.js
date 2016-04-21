var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
for(var i=0; i<animals.length-1; i++) {
    console.log(animals[i])
}

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
for(var i=0; i<animals.length; i+=2) {
    console.log(animals[i])
}

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
for(var i=animals.length-1; i>=0; i--) {
    console.log(animals[i])
}

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
    for(var i=0; i<animals.length; i++) {
        if(animals[i] === "rat" || animals[i] === "ocelot"){
            console.log(animals[i])
        } 
        else {
            console.log(animals[i])
            console.log(animals[i])
        }
        
}
