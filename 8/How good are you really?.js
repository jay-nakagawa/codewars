function betterThanAverage(classPoints, yourPoints) {
 let classAvg = classPoints.reduce((x,y) => x + y) / classPoints.length 
return yourPoints > classAvg
}

