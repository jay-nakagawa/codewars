function enough(cap, on, wait) {
  let newCap = on + wait
  if (cap >= newCap){return 0}
  else{return newCap - cap }
}
