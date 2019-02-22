function nth(list, num){
  if(num === 0){
    return list.value;
  }
  if(list.rest){
    return nth(list.rest, num - 1);
  }
}
function prepend(element, subList){
  let new_root = {value: element, rest: subList};//rest: {subList}
  return new_root;
}
function arrayToList(arr){
  //console.log(arr);
  let list = {}
  for(let i = (arr.length - 1); i >= 0; i --){
    //console.log(arr[i]);
     let node = {value: arr[i], rest: list};
     list = node;
	}
  console.log("here is my final list:", list)
  return list;
}
