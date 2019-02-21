//ex3
// Your code here.
function nth(list, num){
  if(num === 0 && list){
    return(list.value);
  }else if(list.rest){
    return(nth(list.rest, num -1));
  }
}
arr1 = [5,6]
function prepend(element, subList){
  let new_root = {value: element, rest: subList};//rest: {subList}
  return new_root;
}
function arrayTolist(arr){
  let list = null;
  for(let i = (arr.length - 1); i >= 0; i--){
     let node = {value: arr[i], rest: list};

  }
