function sumArray(array) {
if(array && array.length > 2){
  return array.sort((a,b) => a-b).slice(1, -1).reduce((x,y) => x + y)
}else{
  return 0
}

}
