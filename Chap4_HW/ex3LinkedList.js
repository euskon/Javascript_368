//ex3
// Your code here.
function nth(list, num){
  if(num === 0 && list){
    return(list.value);
  }else if(list.rest){
    return(nth(list.rest, num -1));
  }
}
function prepend(element, subList){
  let list = {value:
function arrayTolist(...arr){
