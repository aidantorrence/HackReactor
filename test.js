var obj = {a: 343, b: 2343, c:234234}
function double(num) {
 	return num + num
}

var bro = function(collection, iterator) {
  if (collection !== null && typeof collection === 'object') {
    for (key in collection) {
  		collection[key] = iterator(collection[key])
  	}
  }
  if (Array.isArray(collection) === true) {
  	for (var i = 0;i<collection.length;i++) {
  		collection[i] = iterator(collection[i])
  	}
  }
 };


bro(obj,double)
console.log(obj)

