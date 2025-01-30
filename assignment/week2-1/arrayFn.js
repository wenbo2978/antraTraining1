const arr = [2, 3, 5, 4, 1, 9, 7]
console.log(arr);

Array.prototype.myFilter = function(fn){
  const ans = [];
  for(let i = 0; i < this.length; i ++){
    if(fn(this[i])){
      ans.push(this[i]);
    }
  }
  return ans;
}

const filterArr = arr.myFilter(num => num > 3);

console.log(filterArr);

Array.prototype.myReduce = function(fn, init){
  let res = init;
  for(let i = 0; i < this.length; i ++){
    res = fn(res, this[i]);
  }
  return res;
}

const reduceValue = arr.myReduce((acc, v) => acc + v, 0);

console.log(reduceValue);
