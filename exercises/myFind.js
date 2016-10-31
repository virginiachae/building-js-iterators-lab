// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
function myFind(arr, callback) {

//  CODE INSIDE HERE   //
  for (var i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)){
      return arr[i];
    }
  }
}

// var findWord = function(word) {
//   if (word)
// }
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFind;
