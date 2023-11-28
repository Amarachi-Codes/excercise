// Missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and returns the 
// missing letter in the array.

// You will always get a valid array. And it will always be exactly one letter missing. The length 
// of the array will always be at least 2. The array will always contain letters in only one case.


// E.g [‘a’,’b’,’c’,’d’,’f’] =>’e’
// [‘O’,’Q’,’R’,’S’]=>’P’

// function missingLetters(arr){
//     let alphabets = "^[a-z]+S"
//     if(arr )
// } 


function missingLetters(arr){
   let letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for(let i=1; i < letters.length; i++){
   let eachletters = letters[i]
   if(arr.length < 2){
      return "invalid array"
   }if(!arr.includes(eachletters)){
      return eachletters
   }
} return "no missing letter"
}
// console.log(missingLetters(['a','b','c','d','f']));




