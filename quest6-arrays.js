const names = ["elphaz", "calvin", "thomas", "levlen", "david"];
console.log(names[1]); // you will access "calvin"
names.push("kelly"); // this is added on names list  to :["elphaz", "calvin", "thomas", "levlen", "david","kelly"]
names.pop(); //removes the last element on the list.
names.shift(); //removes the first element on the list.
names.unshift("god"); // adds an element at [0] firstly on the :[ 'god', 'calvin', 'thomas', 'levlen', 'david' ]
console.log(names);
// let array = names.slice(1, 3); // prints elements from index[1] to index[2]
let array = names.splice(2, 4); //prints elements from index[2] to index[4] of position
console.log(array);
