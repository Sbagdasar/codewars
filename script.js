// var replaceDots = function(str) {
//     return str.replace(/[.]/g, '-');
//   }
//  console.log(replaceDots("one.two.three")) 

//task 2 2
/*function powersOfTwo(n){
    let arr=[];
    for(let i=0; i<=n; i++){
        arr.push(2**i)
    }
    return arr
  }
  console.log(powersOfTwo(0))
  console.log(powersOfTwo(1))
  console.log(powersOfTwo(2))*/

  //task 3
//   function buildString(...template){
//     return `I like ${template.join(', ')}!`;
//   }
var min = function(list){
    let min = list[0];
    for (let i = 0; i < list.length; i++) {
        
        if(list[i]<=min){
            min = list[i]
        }
    }
    return min;
}

var max = function(list){
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if(list[i]>=max){
            max = list[i]
        }
    }
    return max;
}
console.log(min([-52, 56, 30, 29, -54, 0, -110]))