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


/*
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
// best practice
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};
const rps = (p1, p2) => {
    var map = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (p1 == p2) {
        return 'Draw!';
    } else {
        return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
};*/
/*
function expressionMatter(a, b, c) {
    let arr = []
    arr.push(a*(b+c))
    arr.push(a*b*c)
    arr.push(a+b*c)
    arr.push((a+b)*c)
    arr.push(a+b+c)
    return Math.max(...arr)
}
*/
/*
function removeSmallest(numbers) {
    let x= Math.min(...numbers)
let m=numbers.indexOf(x, 0)
    numbers.splice(m,1)
    return numbers
    //numbers.filter(el => el!=x)
    throw "TODO: removeSmallest";

}
console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([2, 2, 1, 2, 1]))*/

// function getMiddle(s)
// {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

/*
function nextPal(val) {
    /!* your code here *!/
    //11
    for(let i=val+1; i<=Infinity; i++){
        let str = (i+'').split('')
        let strj = str.join('')
        let strrev = str.reverse().join('')
        if(strj === strrev && strj != val+''){
            return i;
        }


    }
}

nextPal(11)*/

function validISBN10(isbn) {
    debugger
    if (isbn.length == 10) {
        let arr = isbn.split('')//[1,2,3,4,5,6,7,8,9,x]
        let sum = 0

        for (let i = 0; i <= arr.length - 1; i++) {
            let x = i + 1
            if (i <= arr.length - 2 && arr[i] == 'X') {
                return false
            }
            if (arr[arr.length - 1] == 'X') {
                sum += 10 * x
            } else {
                sum += arr[i] * x
            }

        }
        if (sum % 11 == 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
}

function validISBN10(isbn) {
    var len = isbn.length;

    if (len !== 10) {
        return false;
    }

    return isbn.split('')
        .map(function (num, index) {
            return (num === 'X' && index === len - 1 ? 10 : parseInt(num, 10)) * (index + 1);
        })
        .reduceRight(function (a, b) {
            return a + b;
        }, 0) % 11 === 0;
}

const validISBN10 = isbn => isbn.length == 10 && isbn.split("").reduce((a, b, i) => a + (((b == "X") && (i == 9)) ? 10 : b) * (i + 1), 0) % 11 == 0;

console.log(validISBN10("X123456788"))
console.log(validISBN10("XXXXXXXXXX"))
console.log(validISBN10("048665088X"))
