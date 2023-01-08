function squareSum(numbers){
return numbers.map(x => x*x).reduce((a,b) => a + b, 0)
}


// take array and square each number. reduce the array by adding elements. must include initial value for empoty arrays or error will occur
