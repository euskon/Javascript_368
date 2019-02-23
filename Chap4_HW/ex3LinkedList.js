function nth(list, num){
  if(num === 0){
    return list.value;
  }
  if(list.rest){
    return nth(list.rest, num - 1);
  }
}
function prepend(element, subList){
  let new_root = {value: element, rest: subList};
  return new_root;
}
function arrayToList(arr){
  let list = {}
  for(let i = (arr.length - 1); i >= 0; i --){
     let node = prepend(arr[i], list);
     list = node;
	}
  return list;
}
function listToArray(list){
  let arr = []
  for(let node = list; node; node = node.rest){
    if(node.value){
      arr.push(node.value);
    }
    list = list.rest;
  }
  return arr;
}
