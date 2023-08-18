// function expression 

// (Task = write a function which return valid string when first letter is "c" or "C" and length of string is more than 5)


// function checkvalidString(inputString){
//     let firstLetter = inputString[0]
//     let isLetterC= firstLetter==="c" || firstLetter==="C"
//     let lengthOfInputString = inputString.length 
//     let isLengthMoreThan5 = lengthOfInputString>5
//     if(isLetterC && isLengthMoreThan5){
//         return "Valid String"
//     }
//     else{
//         return "Invalid String"
//     }
// }
// F-expression
// const checkvalidString = function (inputString){
//     let firstLetter = inputString[0]
//     let isLetterC= firstLetter==="c" || firstLetter==="C"
//     let lengthOfInputString = inputString.length 
//     let isLengthMoreThan5 = lengthOfInputString>5
//     if(isLetterC && isLengthMoreThan5){
//         return "Valid String"
//     }
//     else{
//         return "Invalid String"
//     }
// }
// arrow functions
const checkvalidString = (inputString) => {
    let firstLetter = inputString[0]
    let isLetterC= firstLetter==="c" || firstLetter==="C"
    let lengthOfInputString = inputString.length 
    let isLengthMoreThan5 = lengthOfInputString>5
    if(isLetterC && isLengthMoreThan5){
        return "Valid String"
    }
    else{
        return "Invalid String"
    }
}
let returneValue= checkvalidString('chandu')
console.log(returneValue)


// write a arrow function whch takes 2 numbers and return the sum



const givesSum = (a,b)=>{
    let sumofGivenInputs = a+b 
    return  sumofGivenInputs
}

let sunValue = givesSum(2,4)  ///6

console.log(sunValue)





















