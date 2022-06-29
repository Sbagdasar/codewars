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
// var min = function(list){
//     let min = list[0];
//     for (let i = 0; i < list.length; i++) {
        
//         if(list[i]<=min){
//             min = list[i]
//         }
//     }
//     return min;
// }

// var max = function(list){
//     let max = list[0];
//     for (let i = 0; i < list.length; i++) {
//         if(list[i]>=max){
//             max = list[i]
//         }
//     }
//     return max;
// }
// best practice
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);
// console.log(min([-52, 56, 30, 29, -54, 0, -110]))

//task 5
/*var comparator = function(a,b) {
    // Your code here
    return 0
  }
  best pr
  song = [
"On the 12th day of Christmas my true love gave to me",
"12 drummers drumming,",
"11 pipers piping,",
"10 lords a leaping,", 
"9 ladies dancing,",
"8 maids a milking,",
"7 swans a swimming,", 
"6 geese a laying,", 
"5 golden rings,", 
"4 calling birds,",
"3 French hens,", 
"2 turtle doves and", 
"a partridge in a pear tree."
]

var comparator = (a, b) => song.indexOf(a) - song.indexOf(b)
*/
// task 6
// String.prototype.isUpperCase = function() {
//     return String(this) === this.toUpperCase()
//   }

//task7
/*
function uncensor(infected, discovered) {
    let newArr = []
    let z = 0;
    for (let i = 0; i < infected.length; i++) {
        if(infected[i]!="*"){
            newArr.push(infected[i])
            //console.log(infected[i],'i')
        }else{
            for (let k = 0; k < discovered.length; k++) {
                
                newArr.push(discovered[z])
                z++
                //console.log(discovered[k],'k')
                break
            }
        }
       
        
    }



    return newArr.join('');
  }
//   console.log(uncensor("A**Z*N*", "MAIG"));   
//   console.log("A**Z*N*", "MAIG");   
  // best practice
  function uncensor(infected, discovered) {
    const arr = [...discovered]
    console.log(arr);
    return [...infected].map(el=> el === '*' ? arr.shift() : el).join('')
  }
  uncensor("A**Z*N*", "MAIG")
*/


//task 8
const rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper'){
        return "Player 1 won!"
    }else if(p1 === 'scissors' && p2 === 'rock'){
        return "Player 2 won!"
    }else if(p1 === 'paper' && p2 === 'rock'){
        return "Player 1 won!"
    }else if(p2 === 'scissors' && p1 === 'paper'){
        return "Player 2 won!"
    }else if(p2 === 'scissors' && p1 === 'rock'){
        return "Player 1 won!"
    }else if(p2 === 'paper' && p1 === 'rock'){
        return "Player 2 won!"
    }else{
        return "Draw!"
    }
};