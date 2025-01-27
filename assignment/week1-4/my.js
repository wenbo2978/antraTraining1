/**number 1*/
function reverseNumber(num){
  let ans = 0;
  while(num > 0){
    let mod = num % 10;
    ans = ans * 10 + mod;
    num = Math.floor(num / 10);
  }
  return ans;
}

//console.log(reverseNumber(32243));

/**number 2*/

function isPalindrome(str){
  let chs = str.split('');
  let left = 0;
  let right = chs.length - 1;
  while(left < right){
    if(chs[left] !== chs[right]){
      return false;
    }else{
      left ++;
      right --;
    }
  }
  return true;
}

//console.log(isPalindrome("abbba"));

/**number 3 */

function generationCombination(str){
  let st = 0;
  let end = 1;
  const ans = [];
  for(; end <= str.length; end ++){
    ans.push(str.split('').slice(st, end).join(''));
  }
  st ++;
  for(; st < str.length; st ++){
    ans.push(str.split('').slice(st, end).join(''));
  }
  return ans;
}

//console.log(generationCombination("dog"));

/**number 4 */

function returnStringInOrder(str){
  let chs = new Array(52);
  chs.fill(0);
  str.split('').forEach(element => {
    if(element.charCodeAt(0) < 97){
      chs[element.charCodeAt(0) - 65] ++;
    }else{
      chs[element.charCodeAt(0) - 97 + 26] ++;
    }
      
  });
  let charArr = [];
  for(let i = 0; i < 52; i ++){
    while(chs[i] > 0){
      chs[i] --;
      if(i >= 26)
        charArr.push(String.fromCharCode(97 + i - 26));
      else
        charArr.push(String.fromCharCode(65 + i));
    }
  }
  return charArr.join('');
}

//console.log(returnStringInOrder("agkdHGDSFHHSgskgnsa"));

/**number 5 */

function upperCaseFirstLetter(str){
  return str.split(' ').map((v, index) => 
    v.split('').map((ele, i) => i === 0 ? ele.toUpperCase() : ele).join(''))
    .join(' ');

}

//console.log(upperCaseFirstLetter("the quick brown fox"));

/**number 6 */

function filterLongestString(str){
  let index = 0;
  let len = -1;
  str.split(' ').forEach((element, i) => {
    if(element.length > len){
      len = element.length;
      index = i;
    }
  })
  return str.split(' ')[index];
}

//console.log(filterLongestString("Web Development Tutorial"));

/**number 7 */
function countVowel(str){
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let count = 0;
  str.split(' ').forEach(element => {
    element.split('').forEach(e => {
      if(set.has(e)){
        count ++;
      }
    }) 
  })
  return count;
}

//console.log(countVowel('The quick brown fox'));

/**number 8 */
function isPrime(number){
  if(number === 0 || number === 1){
    return false;
  }
  let count = 0;
  for(let i = 2; i <= Math.sqrt(number); i ++){
    if(number % i === 0){
      count ++;
    }
  }
  return count === 0 ? true : false;
}

//console.log(isPrime(8));

/**number 9 */
function returnType(arg){
  return typeof arg;
}

//console.log(returnType("string"));
 

/**number 10 */

function createMatrix(n){
  const matrix = [];
    
  for (let i = 0; i < n; i++) {
      const row = new Array(n).fill(0);
      matrix.push(row);
  }
  return matrix;
}

//console.log(createMatrix(5));

/**number 11 */

function findSecondRank(arrs){
  if(arrs.length < 2){
    return "invalid input";
  }
  let fMax = arrs[0];
  let fMin = arrs[0];
  let sMax = Number.MIN_VALUE;
  let sMin = Number.MAX_VALUE;
  for(let i = 1; i < arrs.length; i ++){
    if(arrs[i] > fMax){
      sMax = fMax;
      fMax = arrs[i];
    }else if(arrs[i] > sMax){
      sMax = arrs[i];
    }

    if(arrs[i] < fMin){
      sMin = fMin;
      fMin = arrs[i];
    }else if(arrs[i] < sMin){
      sMin = arrs[i];
    }
  }
  return [sMin, sMax];
}

//console.log(findSecondRank([1,2,3,4,5]));


/**number 12 */

function perfectNumber(number){
  let ans = 0;
  for(let i = 1; i < number; i ++){
    if(number % i === 0){
      ans += i;
    }
  }
  return ans === number;
}

//console.log(perfectNumber(28));

/**number 13 */

function findFactors(number){
  const ans = [];
  for(let i = 1; i <= number; i ++){
    if(number % i === 0){
      ans.push(i);
    }
  }
  return ans;
}

//console.log(findFactors(100));

/**number 14 */

let flag = -1;

function convertAmountToCoins(amount, coins){
  const res = [];
  const path = new Array(coins.length).fill(0);
  backtrackCoins(0, coins, path, amount, res);
  return res;
}

function backtrackCoins(pos, coins, path, rest, res){
  if(flag === 1)
    return;
  if(rest === 0){
    flag = 1;
    for(let i = 0; i < coins.length; i ++){
      let n = path[i];
      while(n > 0){
        n --;
        res.push(coins[i]);
      }
    }
  }else{
    if(pos >= coins.length)
      return;

    let maxNum = Math.floor(rest / coins[pos]);
    for(let i = maxNum; i >= 0; i --){
      path[pos] = i;
      backtrackCoins(pos + 1, coins, path, rest - i * coins[pos], res);
    }
  }
}

console.log(convertAmountToCoins(46, [25, 10, 5, 2, 1]));

/**number 15 */

function calculatePow(b, n){
  return Math.pow(b, n);
}

//console.log(calculatePow(3, 4));


/**number 16 */

function extractUniqueLetter(str){
  const set = new Set();
  return str.split('').reduce((arr, ch) => {
    if(!set.has(ch)){
      arr.push(ch);
      set.add(ch);
    }
    return arr;
  }, []).join('');
}

//console.log(extractUniqueLetter("thequickbrownfoxjumpsoverthelazydog"));

/**number 17 */

function getFrequency(str){
  return str.split('').reduce((fre, ch) => ({
    ...fre,
    [ch]: (fre[ch] || 0) + 1
  }), {});
}

//console.log(getFrequency("abfssgffasfngaDdaFAGAF"));

/**number 18 */

function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let mid = left + Math.floor((right - left) / 2);
    if(arr[mid] >= target){
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  if(left >= arr.length)
    return -1;
  return arr[left] === target ? left : -1;
}

//console.log(binarySearch([3, 8, 9, 14, 69, 98], 98));

/**number 19 */

function filterArray(arr, target){
  return arr.filter((e, _) => e > target);
}

//console.log(filterArray([3, 5, 9, 1, 2, 8, 7, 52], 5));

/** number 20*/

function generateStringId(len, strList){
  const ans = [];
  for(let i = 0; i < len; i ++){
    ans.push(strList.charAt(Math.floor(Math.random() * len)));
  }
  return ans.join('');
}

//console.log(generateStringId(10, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"));

/**number 21 */

function getAllCombination(len, arr){
  const set = new Set(arr);
  const new_arr = Array.from(set);
  //console.log(new_arr);
  const res = [];
  const rd = new Array(arr.length).fill(0);
  backtrack(res, 0, new_arr, rd, len);
  return res;
}


function backtrack(res, pos, data, arr, rest){
  if(rest === 0){
    const list = [];
    for(let i = 0; i < arr.length; i ++){
      if(arr[i] === 1){
        list.push(data[i]);
      }
    }
    res.push(list);
    return;
  }else{
    if(rest > data.length - pos)
      return;
    backtrack(res, pos + 1, data, arr, rest);
    arr[pos] = 1;
    backtrack(res, pos + 1, data, arr, rest - 1);
    arr[pos] = 0;
  }
  return;
}

//console.log(getAllCombination(2, [1, 2, 3]));

/**number 22 */

function countLetter(str, ch){
  const chs = str.split('');
  let ans = 0;
  chs.forEach(ele => ele === ch ? ans ++ : 0);
  return ans;
}

//console.log(countLetter("microsoft.com", "o"));

/**number 23 */

function getFirstUniqueLetter(str){
  const obj = {};
  const list = str.split('');
  list.forEach(ele => {
    if(ele in obj){
      obj[ele] ++;
    }else{
      obj[ele] = 1;
    }
  });
  for(let i = 0; i < list.length; i ++){
    if(obj[list[i]] === 1){
      return list[i];
    }
  }
  return null;
}

//console.log(getFirstUniqueLetter('abacddbec'));

/**number 24 */

function bubbleSort(arr){
  for(let i = 0; i < arr.length; i ++){
    for(let j = i + 1; j < arr.length; j ++){
      if(arr[i] < arr[j]){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

//console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/**number 25 */

function getLongestCountry(arr){
  if(arr.length > 0){
    let index = 0;
    let maxLen = arr[0].length;
    arr.forEach((ele, i) => {
      if(ele.length > maxLen){
        maxLen = ele.length;
        index = i;
      }
    })
    return arr[index];
  }
  
  return null;
}

//console.log(getLongestCountry(["Australia", "Germany", "United States of America"]));

/**number 26 */

function getLongestSubstring(str){
  if(str.length <= 1)
    return str;
  const set = new Set();
  let left = 0;
  let right = 1;
  let fLeft = 0;
  let fRight = 0;
  const chs = str.split('');
  set.add(chs[0]);
  while(right < chs.length){
    if(!set.has(chs[right])){
      set.add(chs[right]);
      right ++;
    }else{
      if((fRight - fLeft + 1) < (right - left)){
        fLeft = left;
        fRight = right - 1;
      }
      set.delete(chs[left]);
      left ++;
    }
  }
  if((fRight - fLeft + 1) < (right - left)){
    fLeft = left;
    fRight = right - 1;
  }

  //console.log(chs.slice(fLeft, fRight + 1));

  return chs.slice(fLeft, fRight + 1).join('');
}

//console.log(getLongestSubstring('abcdffedsgd'));


/**number 27 */

function getLongestPalindrome(str){
  const chs = str.split('');
  let len = chs.length;
  const path = [];
  for(let i = 0; i < len; i ++){
    const list = new Array(len).fill(-1);
    path.push(list);
  }

  for(let i = 0; i < len; i ++){
    path[i][i] = 1;
  }
  let maxLen = 1;
  let left = 0;
  let right = 0;
  for(let i = len - 2; i >= 0; i --){
    for(let j = i + 1; j < len; j ++){
      if(j - i <= 2){
        if(chs[j] === chs[i]){
          path[i][j] = 1;
          if(j - i + 1 > maxLen){
            left = i;
            right = j;
          }
        }
      }else{
        if(path[i + 1][j - 1] === 1 && chs[j] === chs[i]){
          path[i][j] = 1;
          if(j - i + 1 > maxLen){
            left = i;
            right = j;
          }
        }
      }
    }
  }
  return chs.slice(left, right + 1).join('');
}

//console.log(getLongestPalindrome("abracadabra"));

/**number 28 */

function callFunction(fn){
  fn();
}

const print = () => {
  console.log("hello world");
}

//callFunction(print);


/** number 29*/

function returnFunctionName(fn){
  console.log(fn.name);
}

//returnFunctionName(print);