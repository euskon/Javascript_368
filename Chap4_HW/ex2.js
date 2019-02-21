function sum(arrNums){
  let total = 0;
  for(let arrVal of arrNums){
    total += arrVal;
    //console.log(arrVal);
  }
  return(total);
}
function range(x, y, incr = 1){
  let arr = [];
  if(incr > 0){
    for(let i = x; i <= y; i += incr){
   	 arr.push(i);
    }
  } else if(incr < 0){
    for(let i = x; i >= y; i += incr){
      arr.push(i);
    }
  }
  return(arr);
}
