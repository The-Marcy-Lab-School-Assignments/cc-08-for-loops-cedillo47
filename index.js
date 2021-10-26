//1
function countToTwenty(){
  for (var i = 1; i <= 20; i++){
      console.log(i)
  }
}
// countToTwenty()

//2
function countFromTwenty(){
  for (var i = 20; i >= 1; i--){
      console.log(i)
  }
  
}
// countFromTwenty()

//3
function countToN(number){
 for (var i = 1 ; i <= number; i++){
      console.log(i)
  }
}
// countToN(10)

//4
function countFromN(number){
   for (var i = number; i >= 1; i--){
      console.log(i)
  }
}
// countFromN(10)

//5
function countEveryOdd(odd){
for (let i = 1 ; i <= odd; i++){
     if ( i % 2 !== 0){
         console.log(i)
     }
  }
}
// countEveryOdd(12)