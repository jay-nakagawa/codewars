String.prototype.toAlternatingCase = function () {
  return this.split('').map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
}

//because this is a prototype, we must use 'this'
//string is passed in then split into individual characters forming an array
// map function takes each element and checks if it is lower case. if x === x.toLowerCase() then we know that x is a lower case letter. x is then made upper case else lowercase
/
