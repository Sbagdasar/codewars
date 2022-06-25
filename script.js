// var replaceDots = function(str) {
//     return str.replace(/[.]/g, '-');
//   }
//  console.log(replaceDots("one.two.three")) 

//task 2 2
function powersOfTwo(n){
    let arr=[];
    for(let i=0; i<=n; i++){
        arr.push(2**i)
    }
    return arr
  }
  console.log(powersOfTwo(0))
  console.log(powersOfTwo(1))
  console.log(powersOfTwo(2))